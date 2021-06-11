/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false
    },
    k: null
  }
};

const findPath = (obj, path) => {
  const charArr = [...path].filter(el => el !== ".");
  let count = 0;
  let result;
  let outputObj = obj;

  while (count < charArr.length) {
    result = findValue(outputObj, charArr[count]);

    if (typeof result !== "undefined") {
      count = count + 1;
      outputObj = result;
    } else {
      return result;
    }
  }

  return result;

  //return value present at path
};

function findValue(obj, key) {
  if (typeof obj[key] === "object") return obj[key];
  if (typeof obj[key] === "boolean" || obj[key]) return obj[key];
  else return undefined;
}

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null

//q.2) parent box center of the div. child box (3) center of the div.
//q.3) react states and effects questions and write event handler on divs.
//q.4) questions on set time out and promise console.log sequence.
//q.4) hoisting in functions and var and let.
