import React from "react";
import gridData from './gridData.json';

const Solver = ({view, gridSize, gridValues, updateCellValue, solveSudoku, changeGridSize, resetSudoku, message}) => {
  return (
    <div className={(view === 'solver') ? "flex items-center grid grid-cols-12 mt-6" : "hidden"}>
      <div className="col-span-12 md:col-span-8">
        {
          gridData['' + gridSize].borders.map((row, rowIndex) => (
            <div className="flex justify-center">
              {
                row.map((cell, columnIndex) => (
                  <input
                    type='text'
                    className={gridData['' + gridSize].sizingClassList + ' border-2 text-center border-black outline-none dark:border-gray-200 dark:bg-gray-700 dark:text-gray-200 border-t-' + ('' + cell).charAt(0) + ' border-l-' + ('' + cell).charAt(1) + ' border-b-' + ('' + cell).charAt(2) + ' border-r-' + ('' + cell).charAt(3)}
                    maxLength='1'
                    value={gridValues[rowIndex][columnIndex]}
                    onChange={(event) => updateCellValue(rowIndex, columnIndex, event.target.value)}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
      <div className="mt-6 md:mt-0 col-span-12 md:col-span-4">
        <div className="flex flex-wrap justify-around px-4 lg:block xl:px-8 2xl:px-12">
          <button className="w-full rounded-md py-4 font-semibold bg-blue-400 dark:bg-blue-600 dark:text-gray-200" onClick={() => solveSudoku()}>Solve me!</button>
          <br/>
          <select className="w-full rounded-md py-4 font-semibold bg-purple-400 text-center mt-6 dark:bg-purple-600 dark:text-gray-200" onChange={(event) => changeGridSize(parseInt(event.target.value))}>
            {
              Object.keys(gridData).map((grid) => (
                <option key={grid} value={grid}>{grid}x{grid}</option>
              ))
            }
          </select>
          <button className="w-full rounded-md py-4 font-semibold bg-pink-400 mt-6 dark:bg-pink-600 dark:text-gray-200" onClick={() => resetSudoku()}>Reset sudoku grid</button>
          <div className="w-full rounded-md p-4 font-semibold bg-green-400 text-center mt-6 dark:bg-green-600 dark:text-gray-200">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solver;