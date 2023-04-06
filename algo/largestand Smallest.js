const arr = [1, 2, 3, 4, 100];
//**find largest and smallest */

let largest = 0;
let smallest = 1;

for (let num of arr) {
  if (num > largest) largest = num;
  else if (num < smallest) smallest = num;
}

console.log(largest, smallest);
