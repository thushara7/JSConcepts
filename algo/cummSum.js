//* cumulative sum at each index of an array of integers
let arr = [1, 3, 5, 7];
let sum = 0;
let index = 0;
let result = [];

for (let num of arr) {
  sum = sum + arr[index];
  index += 1;
  result.push(sum);
}
console.log(result);
