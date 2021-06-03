function moveZeroes(arr) {
  let result = [];
  let stack = [];

  for (let item of arr) {
    if (item === 0) stack.push(item);
    else result.push(item);
  }

  return [...result, ...stack];
}

let answer = moveZeroes([1, 2, 0, 30, 4, 0, 8, 0, 9, 10]);
console.log("answer", answer);
