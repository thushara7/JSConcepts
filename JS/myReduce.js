var input = [1, 2, 3, 4, 5, 1];
//let sum = input.reduce((acc, cur) => acc + cur, 10);

function myReduce(callback, defaultval) {
  let acc = defaultval;

  for (let item of this) {
    acc = callback(acc, item);
  }

  return acc;
}

function calculatesum(acc, curr) {
  return acc + curr;
}

Array.prototype.myReduce = myReduce;

let sum = input.myReduce(calculatesum, 0);

console.log("sum", sum);
