let arr = [8, 12, 3];
let arr2 = [5, 7, 4];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        // ES6 way of swapping array elements
        // [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));

//O(n^2)
//O(1)
