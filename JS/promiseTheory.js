console.log("find user");

//promise
//By definition, a promise is an object that encapsulates the result of an asynchronous operation.
// A promise object has a state that can be one of the following:

// Pending
// Fulfilled with a value
// Rejected for a reason

// const promise1 = new Promise((resolve, reject) => {
//   // contain an operation
//   // ...

//   // return the state
//   if (success) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// });

//Once a new Promise object is created, its state is pending. If a promise reaches fulfilled or rejected state, it is resolved.//
//Consuming a Promise: then, catch, finally
//The then() method accepts two callback functions: onFulfilled and onRejected.
let success = false;
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([1, 2, 3]);
      } else {
        reject("failed error");
      }
    }, 1000);
  });
}

const promise = getUsers()
  .then(
    (users) => {
      console.log(users);
    },
    (error) => console.log(error)
  )
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // common method to be called after then/catch
  });

console.log("find user");

// function startProcess() {
//   return new Promise((resolve, reject) => {
//     var name = prompt("enter your name");
//     if (name.length > 1) {
//       resolve(name);
//     } else {
//       reject("name is empty");
//     }
//   });
// }

// startProcess()
//   .then(
//     (name) => console.log(name),
//     (err) => console.log("this is err", err)
//   )
//   .catch((err) => console.log(err))
//   .finally(() => console.log("the end"));

//promise.all
//The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.

// var p1 = new Promise((resolve, reject) => {
//   // resolve("yay1");
//   // reject("err1");

// });
var p1 = 3;
var p2 = new Promise((resolve, reject) => {
  resolve("yay2");
  //reject("err2");
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("yay3"), 2000);
});

// Promise.all([p1, p2, p3]).then(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );
//[3, 'yay2', 'yay3']

//promise.race
//The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects, with the value or reason from that promise.
Promise.race([p1, p2, p3]).then(
  (res) => console.log(res),
  (err) => console.log(err)
);
//3
