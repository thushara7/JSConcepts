//A curried function is a function that takes multiple arguments one at a time.
const add = a => b => c => a + b + c;
const result = add(2)(2)(2);
console.log(result);
