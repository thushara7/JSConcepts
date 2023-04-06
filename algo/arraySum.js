function sumOfArray(array) {
  var sum = 0;
  for (let item of array) {
    sum = sum + item;
  }
  return sum;
}
var values = [1, 2, 3, 4, 5];
// returns 15
console.log(sumOfArray(values));
