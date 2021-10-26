import gridData from './gridData.json';

const solve = (grid, letterCase) => {
  // Size (and its square root) of the sudoku
  const size = grid.length;
  const sqrtSize = Math.sqrt(size);

  // Creating the sudoku array
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(new Array(size).fill(0));
  }

  // Creating the row, column, and square sets
  // Index 0 is row sets, index 1 is column sets, index 2 is square sets
  let sets = [];
  for (let i = 0; i < 4; i++) {
    let tmp = [];
    for (let j = 0; j < size; j++) {
      tmp.push(new Set());
    }
    sets.push(tmp);
  }

  // Copying the grid into the sudoku array and sets
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (grid[i][j] !== "") {
        if (gridData['' + size].validInputList.includes(grid[i][j])) {
          if (isNaN(parseInt(grid[i][j]))) {
            arr[i][j] = grid[i][j].toUpperCase().charCodeAt(0) - 55;
          } else {
            arr[i][j] = parseInt(grid[i][j]);
          }
          sets[0][i].add(arr[i][j]);
          sets[1][j].add(arr[i][j]);
          sets[2][i - i % sqrtSize + Math.floor(j / sqrtSize)].add(arr[i][j]);
        } else {
          return {
            grid: grid,
            message: `Sudoku solving not successful due to invalid input at location (${i + 1}, ${j + 1})`
          };
        }
      }
    }
  }
  // Initialize variables needed to run search
  let counter = 0;
  let evaluate = true;
  let possibleValues = new Set();
  
  while (evaluate) {
    // If an iteration does not yield a new number for the sudoku array, end the while loop
    evaluate = false;

    // This code checks every cell to see if there is only one unique value that can be in it
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (arr[i][j] === 0) {
          possibleValues.clear();
          for (let k = 1; k <= size; k++) {
            if (!sets[0][i].has(k) && !sets[1][j].has(k) && !sets[2][i - i % sqrtSize + Math.floor(j / sqrtSize)].has(k)) {
              possibleValues.add(k);
            }
          }
          if (possibleValues.size === 1) {
            const tmp = possibleValues.values().next().value;
            arr[i][j] = tmp;
            sets[0][i].add(tmp);
            sets[1][j].add(tmp);
            sets[2][i - i % sqrtSize + Math.floor(j / sqrtSize)].add(tmp);
            evaluate = true;
          } else if (possibleValues.size === 0) {
            formatArray(arr, letterCase);
            return {
              grid: arr,
              message: `Sudoku cannot be solved as there is no value which can go into the cell (${i + 1}, ${j + 1})`
            };
          }
        }
      }
    }

    // This code checks every row to see if a value can only fit on one cell in that row
    for (let i = 0; i < size; i++) {
      for (let j = 1; j <= size; j++) {
        if (!sets[0][i].has(j)) {
          possibleValues.clear();
          for (let k = 0; k < size; k++) {
            if (arr[i][k] === 0 && !sets[1][k].has(j) && !sets[2][i - i % sqrtSize + Math.floor(k / sqrtSize)].has(j)) {
              possibleValues.add(k);
            }
          }
          if (possibleValues.size === 1) {
            const tmp = possibleValues.values().next().value;
            arr[i][tmp] = j;
            sets[0][i].add(j);
            sets[1][tmp].add(j);
            sets[2][i - i % sqrtSize + Math.floor(tmp / sqrtSize)].add(j);
            evaluate = true;
          } else if (possibleValues.size === 0) {
            formatArray(arr, letterCase);
            return {
              grid: arr,
              message: `Sudoku cannot be solved as the value ${j} cannot fit anywhere on row ${i + 1}`
            };
          }
        }
      }
    }

    // This code checks every column to see if a value can only fit on one cell in that column
    for (let i = 0; i < size; i++) {
      for (let j = 1; j <= size; j++) {
        if (!sets[1][i].has(j)) {
          possibleValues.clear();
          for (let k = 0; k < size; k++) {
            if (arr[k][i] === 0 && !sets[0][k].has(j) && !sets[2][k - k % sqrtSize + Math.floor(i / sqrtSize)].has(j)) {
              possibleValues.add(k);
            }
          }
          if (possibleValues.size === 1) {
            const tmp = possibleValues.values().next().value;
            arr[tmp][i] = j;
            sets[0][tmp].add(j);
            sets[1][i].add(j);
            sets[2][tmp - tmp % sqrtSize + Math.floor(i / sqrtSize)].add(j);
            evaluate = true;
          } else if (possibleValues.size === 0) {
            formatArray(arr, letterCase);
            return {
              grid: arr,
              message: `Sudoku cannot be solved as the value ${j} cannot fit anywhere on column ${i + 1}`
            };
          }
        }
      }
    }

    // Incrementing the counter
    counter++;
  }

  // Check if the solving was successful
  let successfulSolve = !formatArray(arr, letterCase);

  // Return information
  return {
    grid: arr,
    message: (successfulSolve) ? `Sudoku solving was successful with iteration count of ${counter}` : `Sudoku solving was not successful with iteration count of ${counter}`
  };
}

// Formatting the array
const formatArray = (arr, letterCase) => {
  let zeroFound = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 0) {
        zeroFound = true;
        arr[i][j] = '';
      } else {
        if (arr[i][j] < 10) {
          arr[i][j] = '' + arr[i][j];
        } else {
          if (letterCase === 'uppercase') {
            arr[i][j] = String.fromCharCode(arr[i][j] + 55);
          } else {
            arr[i][j] = String.fromCharCode(arr[i][j] + 87);
          }
        }
      }
    }
  }
  return zeroFound;
}

export default solve;