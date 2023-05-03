function findLongestWord(str) {
  const str_arr = str.split(' ');
  let max = str_arr[0].length;
  str_arr.map((word) => (max = Math.max(max, word.length)));
  longest_word = str_arr.filter(word => word.length == max);
  return longest_word;
}
console.log(findLongestWord("My name is Hardik Kanjariya Kanjariya abcdefghi"));
 