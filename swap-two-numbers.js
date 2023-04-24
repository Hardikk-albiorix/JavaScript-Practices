// let a = 10;
// let b = 12;
// console.log(`Before swapping : \n Value of a : ${a} \n Value of b : ${b}`);
// a= a + b; // a = 10 + 12; a = 22
// b = a - b; // b = 22 - 12; b = 10
// a = a - b; // a = 22 - 10; a = 12
// console.log(`After swapping: \n Value of a: ${a} \n Value of b : ${b}`);

// function swapToNumbers(a,b){
//     console.log(`Before swapping : \n Value of a : ${a} \n Value of b : ${b}`);
//     let x = a + b;
//     let y = a - b;
//     x = a - b;
//     console.log(`After swapping: \n Value of a: ${a} \n Value of b : ${b}`);
// }

function swapToNumbers(x, y) {
  if (x && y) {
    if (isGivenType(x) && isGivenType(y)) {
      x = x + y;
      y = x - y;
      x = x - y;
      return {x, y};
    } else {
      let temp;
      temp = x;
      x = y;
      y = temp;
      return {x, y}
    }
  }
}

function isGivenType(value, type) {
  return value === type;
}

console.log(swapToNumbers('abc', 'bdd'));
