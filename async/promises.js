console.log("Hi Thushara");
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("hello world");
  }, 2000);
});
//As you shown above, you can use the resolve function to fullfil the promise. The then function binds a callback to the promise
// and you can use the data given to the resolve function.
promise.then(function(data) {
  console.log(data);
});
//You can bind multiples callbacks:
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("hello new");
  }, 2000);
});

promise1.then(function(data) {
  console.log(data + " 1");
});

promise1.then(function(data) {
  console.log(data + " 2");
});

promise1.then(function(data) {
  console.log(data + " 3");
});

//The reject function is used to trigger an error. When you use then, you can give 2 functions. The first function is used when the promise exits successfully.
//The second function is used when the promise encounters an error.
var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("We are all going to die");
  }, 1000);
});

promise2.then(
  function success(data) {
    console.log(data);
  },
  function error(data) {
    console.error(data);
  }
);

// write a  function must always return a promise
//If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
//If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
//If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject("error");
    } else if (data % 2 === 0) {
      setTimeout(reject, 2000, "even");
    } else {
      setTimeout(resolve, 1000, "odd");
    }
  });
}

// promise chaining
var promise = job1();

promise

  .then(function(data1) {
    console.log("data1", data1);
    return job2();
  })

  .then(function(data2) {
    console.log("data2", data2);
    return "Hello world";
  })

  .then(function(data3) {
    console.log("data3", data3);
  });

function job1() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("result of job 1");
    }, 1000);
  });
}

function job2() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("result of job 2");
    }, 1000);
  });
}

// output is: Error1 Success 4
function job() {
  return new Promise(function(resolve, reject) {
    reject();
  });
}

let promise = job();

promise

  .then(function() {
    console.log("Success 1");
  })

  .then(function() {
    console.log("Success 2");
  })

  .then(function() {
    console.log("Success 3");
  })

  .catch(function() {
    console.log("Error 1");
  })

  .then(function() {
    console.log("Success 4");
  });

//refer: https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/its-quiz-time
// promises all
function job(delay) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log("Resolving", delay);
      resolve("done " + delay);
    }, delay);
  });
}

var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise.then(function(data) {
  console.log("All done");
  data.forEach(function(text) {
    console.log(text);
  });
});
//output
// Resolving 500
// Resolving 1000
// Resolving 1500
// Resolving 2000
// All done
// done 1000
// done 2000
// done 500
// done 1500
//Beware, Promise.all has a fail-fast behaviour.
// If a given promise is rejected, the resulting promise of Promise.
//all will be rejected at this exact moment. It will not wait for the other promises to complete, and the only received data is the error of the rejected request.

let p1 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 500, "p1");
});

let p2 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1000, "p2");
});

let p3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 1200, "p3");
});

let p4 = new Promise(function(resolve, reject) {
  setTimeout(reject, 300, "p4");
});

let p5 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 800, "p5");
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

  .then(function(data) {
    data.forEach(function(data) {
      cconsole.log(data);
    });
  })

  .catch(function(error) {
    console.error("error", error);
  });
//output: error p4
