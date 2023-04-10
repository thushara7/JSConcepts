let iStack = [];
let oStack = [];

function enqueue(val) {
  // push the item in the stack
  iStack.push(val);
}

function dequeue() {
  return iStack.shift();
}

enqueue(1);
enqueue(2);
enqueue(3);
enqueue(4);

console.log(iStack);
dequeue();
console.log(iStack);
