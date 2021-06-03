var input = [1, 2, 3, 4, 5, 6];

Array.prototype.myFilter = myFilter;

function myFilter(callback) {
  let output = [];
  for (let item of this) {
    let result = callback(item);
    if (result) output.push(item);
  }

  return output;
}

function findEven(num) {
  if (num % 2 === 0) return true;
  else return false;
}
let filtered = input.myFilter(findEven);
