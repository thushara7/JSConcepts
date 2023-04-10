//**Check if a given string is a isomorphic */
console.log(isIsomorphic("kick", "sids")); // true

function isIsomorphic(w1, w2) {
  let charMap1 = {};
  let charMap2 = {};

  if (w1.length !== w2.length) return false;
  else {
    for (let i = 0; i < w1.split("").length; i++) {
      if (charMap1[w1[i]]) {
        charMap1[w1[i]] += 1;
      } else {
        charMap1[w1[i]] = 1;
      }
      if (charMap2[w2[i]]) {
        charMap2[w2[i]] += 1;
      } else {
        charMap2[w2[i]] = 1;
      }
    }
    return (
      Object.values(charMap1).toString() === Object.values(charMap2).toString()
    );
  }
}
