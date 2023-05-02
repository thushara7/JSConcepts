console.log("111");

setTimeout(() => {
  console.log("333");
}, 0);

Promise.resolve().then(() => {
  console.log("444");
});

console.log("222");


sync Code
micro task queue (promise)
macro task queue (setTimeout)