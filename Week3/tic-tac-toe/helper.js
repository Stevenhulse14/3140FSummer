// GET THE WINNER ?
// I need a Function to Get the Winner
// is player 1 the winner or player 2
let matrix = [
  ["O", "X", "O"],
  ["X", "X", "O"],
  ["X", "H", "O"],
];
// this evalutes our rows
const newArr = matrix.map((subarr) => subarr.join(""));

// turn our rows into columns
function transpose(m) {
  let newMatrix = [[], [], []];

  for (let i = 0; i < m.length; i++) {
    // O(N)
    m[i].forEach((item, index) => newMatrix[index].push(item));
  } // nested loop ? does this matter that we are O{N^2}

  return newMatrix;
}

console.log(transpose(matrix));
//something to evaluate those strings

// Dia
// M : Matrix
const dia = (m) => [
  [m[0][0], m[1][1], m[2][2]],
  [m[0][2], m[1][1], m[2][0]],
];

export default { newArr, transpose, dia };

// How to Transpose our matrix
