console.log("this");

let input = [1, 2, 3, 4, 3, 3, 2, 1];
let results = [];
cut(input, input[0]);

function cut(arr) {
  if (!arr.length) return;
  results.push(arr.length);
  let min = Math.min(...arr);
  console.log(arr.length, arr, min);
  let removed = arr.map(el => el - min).filter(item => item > 0);
  cut(removed);
}

console.log("result", results);
