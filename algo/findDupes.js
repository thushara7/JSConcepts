const arr = [1, 1, 2, 3, 4, 5, 6, 7, 8, 6, 6, 7, 7, 7, 10, 10];

let result = [];
let obj = {};

for (let num of arr) {
  if (!obj[num]) {
    obj[num] = 1;
  } else {
    obj[num] = obj[num] + 1;
    if (obj[num] > 1) {
      result.push(num);
    }
  }
}
console.log([...new Set(result)]);
