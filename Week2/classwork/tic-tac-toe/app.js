import obj from "./helper.js";
let { newArr, transpose, dia } = obj;

console.log("LOOK IM RIGHT HERE ", newArr, transpose());
const player1 = "X";
const player2 = "O";
let count = 0;
let state = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
// console.log(matrix[1][2]);

// event
let table = document.addEventListener("click", (e) => {
  //console.log("here is where you are located", e.x, e.y);
  //console.log(e.target);

  // is something
  let newarr = e.target.className.split("");
  console.log(typeof +newarr[0], newarr[1]);
  let indexone = +newarr[0];
  let indextwo = +newarr[1];
  if (count % 2 === 0) {
    e.target.innerHTML = player1;
  } else {
    e.target.innerHTML = player2;
  }
  state[indexone][indextwo] = count % 2 === 0 ? player1 : player2;
  ++count;

  console.log(state);
});

// How to determine a winner ?
// How do we know if someone won ?
//

// add event listen take 2 params "Action" "callback function"
