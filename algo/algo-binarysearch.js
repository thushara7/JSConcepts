//**find a number in a sorted array */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr, 7));
function binarySearch(arr, x) {
  // left index of the current interval
  let l = 0;

  // right index of the current interval
  let r = arr.length - 1;

  // middle index of the current interval
  let mid;

  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);

    // If the element is present at the middle
    // itself
    if (arr[mid] == x) {
      return mid;
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > x) {
      r = mid - 1;
    }

    // Else the element can only be present
    // in right subarray
    if (arr[mid] < x) {
      l = mid + 1;
    }
  }

  // We reach here when element is not
  // present in array
  return -1;
}
