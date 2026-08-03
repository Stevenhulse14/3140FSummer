// GET THE WINNER ?
// I need a Function to Get the Winner
// is player 1 the winner or player 2
let matrix = [
  ["O", "X", "O"],
  ["X", "X", "O"],
  ["X", "H", "O"],
];
// this evalutes our rows
const getRows = (m) => m.map((subarr) => subarr);

// turn our rows into columns
function transpose(m) {
  let newMatrix = [[], [], []];

  for (let i = 0; i < m.length; i++) {
    // O(N)
    m[i].forEach((item, index) => newMatrix[index].push(item));
  } // nested loop ? does this matter that we are O{N^2}

  return newMatrix;
}

//something to evaluate those strings

// Dia
// M : Matrix
const dia = (m) => [
  [m[0][0], m[1][1], m[2][2]],
  [m[0][2], m[1][1], m[2][0]],
];

function checker(arr) {
  // Matrix => str with these higher order functions, tell me if there is a winner and who that winner is
  return arr
    .map((item) => item.join(""))
    .filter((str) => (str === "XXX" ? "XXX" : str === "OOO" ? "OOO" : null))[0];
}

// console.log(
//   "DATA",
//   "Rows:",
//   checker(newArr),
//   "Diagnols :",
//   checker(dia(matrix)),
//   "Columns: ",
//   checker(transpose(matrix)),
// );

export default { getRows, transpose, dia, checker };

// How to Transpose our matrix
