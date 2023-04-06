//**Find all pairs in an array of integers whose sum is equal to a given number */

let arr = [1, 5, 6, 1, 0, 1];
const findSumPairs = (arr, value) => {
  let result = [];
  let sumLookup = {};

  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];
    if (sumLookup[targetVal]) {
      result.push([arr[i], targetVal]);
    }
    sumLookup[arr[i]] = true;
  }

  return result;
};
console.log(findSumPairs(arr, 6));
