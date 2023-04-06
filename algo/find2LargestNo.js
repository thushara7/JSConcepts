// find two largest number and return the sum

function find2Largest(arr) {
  let largest = 0;
  let secondLargestest = 0;

  for (let item of arr) {
    if (item > secondLargestest && item > largest) {
      secondLargestest = largest;
      largest = item;
    } else if (item > secondLargestest) {
      secondLargestest = item;
    }
  }

  return largest + secondLargestest;
}

console.log(find2Largest([7, 1, 20, 3, 4, 5]));
