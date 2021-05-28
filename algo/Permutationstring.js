var checkInclusion = function(s1, s2) {
  let result = findPermutations(s1);
};

let findPermutations = string => {
  if (!string || typeof string !== "string") {
    return "Please enter a string";
  } else if (string.length < 2) {
    return string;
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    // do something
  }
  return permutationsArray;
};

checkInclusion("ab", "eidbaooo");
