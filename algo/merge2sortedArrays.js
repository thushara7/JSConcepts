let arr1 = [8, 12, 13];
let arr2 = [5, 7, 8];

function merge(arr1, arr2) {
  // Make a new array, and 2 pointers to keep track of elements of arr1 and arr2
  let res = [],
    i = 0,
    j = 0;

  // Loop until either arr1 or arr2 becomes empty
  while (i < arr1.length && j < arr2.length) {
    // If the current element of arr1 is lesser than that of arr2, push arr1[i] and increment i
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  // Add the rest of the remining subarray, to our new array
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}
console.log(merge(arr1, arr2));
