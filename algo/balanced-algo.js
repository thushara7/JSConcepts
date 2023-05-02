console.log(balancedParam("[{}()]"));
function balancedParam(str) {
  let charMap = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [];
  for (let item of [...str]) {
    if (item === "[" || item == "{" || item === "(") {
      stack.push(item);
    } else {
      if (charMap[stack.pop()] !== item || !stack.length) return false;
      else return true;
    }
  }
}
