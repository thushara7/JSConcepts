console.log("Happy Coding1");
// the greatest number can be a duplicate
// the 2nd greatest should be an unique number
// do no use inbuilt array functions
let input = [1, 4, 5, 8, 9, 10, 2, 9, 10, 1];
let max = -1;
let second = -1;
var charMap = new Set();
var dupMap = new Set();

for (let [key, value] of input.entries()) {
  if (!charMap.has(value)) {
    //no dups
    charMap.add(value);
  } else {
    dupMap.add(value);
  }
}
for (let [key, value] of input.entries()) {
  if (value > max) {
    //check if it is greater than sec
    if (max > second && !dupMap.has(max)) {
      second = max;
    }
    max = value;
  }
}
console.log(second);
