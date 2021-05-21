//**Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. */
//** var variables can be re-declared and re assigned. */
var a = 8;
var a = 9;

console.log(a); //9
//**----------------------- */
let y = 9;
let y = 0;
// syntax error
//**------------------------ */
function x() {
  y = 1;
  var z = 2;
}

x();

console.log(y); // 1, Since, y is Undeclared variable which is always global.
console.log(z);
//Throws a Reference Error: z is not defined outside x,
// As z is constrained in the execution context in which it is declared
//**--------Let is bloacked scoped. cannot be re declared---------------- */

let foo = "abc";
if (true) {
  let foo = "xyz";
  console.log(foo); //xyz
}
console.log(foo); // abc. Variables are declared in different scope
//**------------------------ */
//Let is hoisted but not assigned undefined before there execution phase.
if (true) {
  console.log(myName);
  let myName = "abc"; // Reference Error
}
