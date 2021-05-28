function test() {
  return (obj = {
    simple: () => {
      return this;
    },
    getFun() {
      return this;
    },
    normal: function() {
      return this;
    }
  });
}

var f1 = new test();

console.log(f1.simple()); // returns an empty obj since it a arrow function.
console.log(f1.getFun()); // returns the test obj with all props.
console.log(f1.getFun()); // returns the test obj with all props.

obj1 = {
  simple: () => {
    return this;
  },
  getFun() {
    return this;
  },
  normal: function() {
    return this;
  }
};

console.log(obj1.simple()); // window
console.log(obj1.getFun()); // obj1
console.log(obj1.normal()); // obj1
