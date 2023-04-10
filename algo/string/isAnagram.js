//**Given two strings, return true if they are anagrams of one another */
function findAnagram(word1, word2) {
  let result = false;
  return (
    word1.toLowerCase().split("").sort().join("") ===
    word2.toLowerCase().split("").sort().join("")
  );
}
console.log(findAnagram("maary", "Aarmy"));
