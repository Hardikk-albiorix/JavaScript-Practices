// A function to find out the even numbers from a given array.
function evenNumbers() {
  const arr = [10, 51, 53, 58, 62, 68, 6, 4, 98, 100, 43];
  const evenNum = arr.filter((num) => num % 2 === 0);
  console.log("Even Numbers :" + evenNum);
}

evenNumbers();

// A function which double array elements.
function doubleElements() {
  const b = [10, 54, 80, 4, 2, 56];
  const double = b.map((n) => n * 2);
  console.log(double);
}

doubleElements();

//Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array

let firstElement = function (array, number = 0) {
  if (number >= 0) {
    if (!array.length && number === 0) {
      return [];
    } else {
      return array.slice(0, number);
    }
  }
};
console.log("nnn", firstElement([8, 9]));

// Write a simple JavaScript program to join all elements of the following array into a string.
const myColor = ["Red", "Green", "White", "Black"];
let str = "";
function arrayToString() {
  for (i = 0; i < myColor.length; i++) {
    str = str + " " + myColor[i];
  }
  return str;
}
console.log(arrayToString());

