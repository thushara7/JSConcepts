const arr = [1, 2, 3, 4, 1, 2];

const myMap = function(fn, initialValue) {
  let newArr = [];
  let initialValue_ = initialValue || 0;
  for (let item of this) {
    initialValue_ = fn(initialValue_, item);
  }
  return initialValue_;
};

Array.prototype.myMap = myMap;
function calculateSum(acc, value) {
  return acc + value;
}
const output = arr.myMap(calculateSum, 0);
console.log(output);
