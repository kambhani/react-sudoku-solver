import './App.css';
import React, { useState } from 'react';
import solve from './solveAlgorithm';
import Modal from './Modal';
import Faq from './Faq';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Solver from './Solver';

function App() {
  const create2dArray = (r, c) => {
    let ret = [];
    for (let i = 0; i < r; i++) {
      ret.push(new Array(c).fill(""));
    }
    return ret;
  }

  const [gridSize, setGridSize] = useState(4);
  const [gridValues, setGridValues] = useState(create2dArray(4, 4));
  const [message, setMessage] = useState('Messages will appear here');
  const [modalDisplay, setModalDisplay] = useState('hidden');
  const [view, setView] = useState('solver');
  const [theme, setTheme] = useState((localStorage.getItem('theme')) ? localStorage.getItem('theme') : 'default');
  const [letterCase, setLetterCase] = useState((localStorage.getItem('letterCase')) ? localStorage.getItem('letterCase') : 'uppercase');

  const changeGridSize = (newSize) => {
    setGridSize(newSize);
    setGridValues(create2dArray(newSize, newSize));
  }

  const updateCellValue = (rowIndex, columnIndex, newValue) => {
    let newValues = JSON.parse(JSON.stringify(gridValues));
    newValues[rowIndex][columnIndex] = newValue;
    setGridValues(newValues);
  }

  const solveSudoku = () => {
    const solveData = solve(gridValues, letterCase);
    setGridValues(solveData.grid);
    setMessage(solveData.message);
  }

  const resetSudoku = () => {
    setGridValues(create2dArray(gridSize, gridSize));
    setMessage('Messages will appear here');
  }

  const handleSettingClick = () => {
    if (modalDisplay === 'hidden') {
      setModalDisplay('fixed');
    } else {
      setModalDisplay('hidden');
    }
  }

  const handleAccordionClick = (el) => {
    const button = (el.tagName === "SPAN" || el.tagName === "P") ? el.parentNode : el;
    const content = button.nextElementSibling;
    if (content.offsetHeight === 0) {
      content.style.height = content.scrollHeight + "px";
      button.children[1].innerHTML = "-";
    } else {
      content.style.height = 0;
      button.children[1].innerHTML = "+";
    }
  }

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    switch (newTheme) {
      case ('default'): {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        break;
      }
      case ('light'): {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
        break;
      }
      case ('dark'): {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
        break;
      }
      default: {
        localStorage.removeItem('theme');
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        break;
      }
    }
  }

  const handleLetterCaseChange = (newCase) => {
    setLetterCase(newCase);
    localStorage.setItem('letterCase', newCase);
    let newGridValues = create2dArray(gridSize, gridSize);
    for (let i = 0; i < gridValues.length; i++) {
      for (let j = 0; j < gridValues[i].length; j++) {
        newGridValues[i][j] = (newCase === 'uppercase') ? gridValues[i][j].toUpperCase() : gridValues[i][j].toLowerCase();
      }
    }
    setGridValues(newGridValues);
  }

  return (
    <div className="App flex flex-col min-h-screen">
      <div className="flex-grow">
        <Header
          handleSettingClick={handleSettingClick}
        />
        <Solver
          view={view}
          gridSize={gridSize}
          gridValues={gridValues}
          updateCellValue={updateCellValue}
          solveSudoku={solveSudoku}
          changeGridSize={changeGridSize}
          resetSudoku={resetSudoku}
          message={message}
        />
        <About
          view={view}
        />
        <Faq
          view={view}
          handleAccordionClick={handleAccordionClick}
        />
      </div>
      <Footer
        setView={setView}
      />
      <Modal
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}
        theme={theme}
        handleThemeChange={handleThemeChange}
        letterCase={letterCase}
        handleLetterCaseChange={handleLetterCaseChange}
      />
    </div>
  );
}

export default App;
