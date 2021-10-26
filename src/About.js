import React from 'react';

const About = ({view}) => {
  return (
    <div className={(view === 'about') ? "grid grid-cols-12" : "hidden"}>
      <div className="mt-3 px-3 col-span-12 lg:col-span-8 lg:px-6 dark:text-gray-200">
        <div className="px-2 sm:px-5 md:px-12">   
          <h1 className="text-4xl my-2 font-semibold">About</h1>
          <h2 className="text-2xl my-1">Introduction</h2>
          <p className="text-justify text-lg font-light">Sudoku has been around for a while with early versions from Euler dating back to the late 18<sup>th</sup> century. The sudoku as we know it today, however, debuted around 40 years ago in a Manhatten based puzzle magazine<sup><a href="https://www.theguardian.com/media/2005/may/15/pressandpublishing.usnews">^</a></sup>. (We, too, were shocked to learn that the "sudoku" did not, in fact, come from Japan.) Since then, it has become an international phenonmenon. People from all walks of life joined in to try their luck at the number puzzle.</p>
          <h2 className="text-2xl my-1">This Project</h2>
          <p className="text-justify text-lg font-light">Maybe you're stuck on a sudoku and need some help. Or maybe you need to flex your sudoku solving skills to your friends. Regardless of your reason, we feel that the sudoku solver can help. It is designed to be an intuitive way to solve your sudokus. This application builds upon an earlier, command-line only version which can be found <a className="text-blue-700" href="https://github.com/kambhani/sudoku-solver">here</a>.</p>
          <h2 className="text-2xl my-1">External Resources</h2>
          <p className="text-justify text-lg font-light">For those who want to learn more, here are some links to get started:</p>
          <ul className="list-disc list-inside">
            <li className="font-thin">Wikipedia offers some great articles about <a className="text-blue-700" href="https://en.wikipedia.org/wiki/Sudoku">sudokus</a> and <a className="text-blue-700" href="https://en.wikipedia.org/wiki/Sudoku_solving_algorithms">sudoku solving algorithms</a></li>
            <li className="font-thin">Some places where you can find free online sudokus to try yourself or plug into this solver are <a className="text-blue-700" href="https://sudoku.com/">Sudoku.com</a>, <a className="text-blue-700" href="https://websudoku.com/">Web Sudoku</a>, and <a className="text-blue-700" href="https://www.247sudoku.com/">24-7 Sudoku</a></li>
            <li className="font-thin">You can find the source code for this application <a className="text-blue-700" href="https://github.com/kambhani/react-sudoku-solver/">here</a></li>
          </ul>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default About;