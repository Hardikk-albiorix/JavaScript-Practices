// Write a program for finding the longest words from the given string

//SOLUTION : 1
function findLongestWord(str) {
  const strArr = str.split(' ');
  let max = strArr[0].length;
  strArr.map((word) => (max = Math.max(max, word.length)));
  longest_word = strArr.filter(word => word.length == max);
  return longest_word;
}
findLongestWord("My name is Hardik Kanjariya Kanjariya abcdefghi");

//SOLUTION : 2
function findLongestWord(str) {
  let maxStr = "";
  let maxStrArr = [];
  for (let item of str.split(" ")) {
      if (item.length > maxStr.length) {
          maxStr = item;
        } else if (item.length === maxStr.length) {
            maxStrArr.push(item);
        }
  }
  console.log(`${maxStr},${maxStrArr}`);
}
findLongestWord("My name is Hardik Kanjariya Kanjariya abcdefghi");

