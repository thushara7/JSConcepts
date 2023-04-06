var values = [1, 2, 3];
// [ 3, 2, 1 ]
console.log(reverseArray(values));

//1.Using a decrementing For Loop
function reverseArray(array) {
  let reverseArr = [];

  for (let item = array.length - 1; item >= 0; item--) {
    reverseArr.push(array[item]);
  }
  return reverseArr;
}

// 2.reverse using reverse method
array.reverse();

//3. Using the Unshift() Method
arr = [1, 2, 3, 4];
arr1 = [];
arr.forEach((element) => {
  arr1.unshift(element);
});
console.log(arr1);

// reverse array w/o second array.
arr = [1, 2, 3, 4];
for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
}
console.log(arr);
