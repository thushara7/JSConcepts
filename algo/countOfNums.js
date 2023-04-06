function countOfNums(array, num) {
  var count = 0;

  for (let item of array) {
    if (item === num) count = count + 1;
  }

  return count;
}
var values = [1, 2, 3, 4, 3];
var num = 3;
// returns 2
console.log(countOfNums(values, num));
