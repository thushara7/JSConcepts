sayHello(); //index.js:2 Uncaught ReferenceError:
//Cannot access 'sayHello' before initialization
let sayHello = () => {
  console.log("hello");
};

sayHi();
function sayHi() {
  console.log("Hello");
}
//this will work
//-----------------------------------------
// JavaScript comes with three features that allow you to run code in concurrently.
// Callbacks, Promises and Async/Await.
