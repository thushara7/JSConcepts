console.log("Happy Coding1");

class Stack {
  constructor() {
    this.data = [];
  }
  pushData = val => {
    this.data.push(val);
  };

  getStack = () => {
    console.log("get Stack data called", this.data);
    return this.data;
  };

  popData = () => {
    let removed = this.data.pop();
    console.log(this.data, removed);
    return removed;
  };
}

class Queue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
    this.data = [];
  }

  dequeue() {
    // return the first element
    for (let item of this.pushStack.data) {
      let removed = this.pushStack.popData;
      console.log(removed());
    }
  }

  enqueue(value) {
    // add element.
    this.pushStack.pushData(value);
    console.log(
      "elements being added to push stack ",
      this.pushStack.getStack()
    );
  }
}

const q1 = new Queue();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.dequeue();
