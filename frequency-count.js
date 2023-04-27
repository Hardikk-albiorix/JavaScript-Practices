//Write a simple JavaScript program to count frequency of an element of array

// function frequencyOfElement(arr) {
//     const array = Array.from(new Set(arr)).map((x) => [
//     x,arr.filter((y) => y === x).length
//     ]);
//     return array;
// }

function frequencyOfElement(array) {
  const frequency = {};
  for (let item of array) {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }
  }
  return frequency;
}
console.log(
  frequencyOfElement([10, 12, 45, 12, 10, 40, 45, 40, 40, 45, 45, 20, 20])
);
