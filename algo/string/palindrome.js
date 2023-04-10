function checkPalindrome(word) {
  let reverse = word.split("").reverse().join("");
  if (word.toLowerCase() === reverse.toLowerCase()) return true;
  else return false;
}
console.log(checkPalindrome("agad"));
