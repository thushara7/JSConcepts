// complexity: o(n) + o(n)

function findCelebrity(input) {
  let ans;
  // make a loop for people
  let stack = [];
  let count = 0;
  input.forEach((element, index) => {
    stack.push(index);
  });

  while (count < input.length - 1) {
    let first = stack.pop();
    let second = stack.pop();

    if (knowEachOther(first, second)) {
      stack.push(second);
    } else if (knowEachOther(second, first)) {
      stack.push(first);
    }

    count++;
  }

  function knowEachOther(a, b) {
    return input[a][b];
  }

  console.log("celebrity is", stack);
}

let input = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0]
];

findCelebrity(input);
