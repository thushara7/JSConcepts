let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];
//**find the missing number */

function findTheNumber(arr) {
  let last = arr[arr.length - 1];
  let sum1 = (last * (last + 1)) / 2;
  let sum2 = 0;
  for (let num of arr) {
    sum2 += num;
  }

  return sum1 - sum2;
}
console.log("sum", findTheNumber(arr));
