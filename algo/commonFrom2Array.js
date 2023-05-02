//** From two sorted array how would you find common number? */

function commonNo(arr1, arr2) {
  let smallestLength =
    arr1.length - 1 > arr2.length - 1 ? arr1.length - 1 : arr2.length - 1;
  let common = 0;
  // sort arrays
  let arr1Sorted = arr1.slice().sort((a, b) => a - b);
  let arr2Sorted = arr2.slice().sort((a, b) => a - b);

  // 1 pointers for each array
  let pointer1 = 0;
  let pointer2 = 0;

  // compare equality and ++ counter of the arr whose element is smaller when comparing

  for (let i = 0; i < smallestLength + 1; i++) {
    if (arr1Sorted[pointer1] === arr2Sorted[pointer2]) {
      common = arr1Sorted[pointer1];
    } else if (arr1Sorted[pointer1] < arr2Sorted[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }

  return common;
}

console.log(commonNo([1, 3, 6, 9, 4], [1, 8, 6, 3, 9, 7]));
