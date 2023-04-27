//Write a simple JavaScript program to remove duplicates from an array.
function removeDuplicateElements(array) {
  // const uniqueArray = Array.from(new Set(array));
  // const uniqueArray = [...new Set(array)];
  const uniqueArray = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  return uniqueArray;
}
console.log(removeDuplicateElements([10, 12, 30, 12, 45, 68, 10]));
