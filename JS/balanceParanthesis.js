//**balanced parentheses */
var expression = "{{}}{}{}";
var expressionFalse = "{}{{}";
console.log(isBalanced(expression)); // true
function isBalanced(exp) {
  let stack = [];
  for (let item of [...exp]) {
    if (item === "{") {
      stack.push("{");
    } else if (item === "}") {
      if (stack.length > 0) {
        stack.pop();
      } else return false;
    }
  }

  // If the array is not empty, it is not balanced
  if (stack.pop()) return false;
  return true;
}
