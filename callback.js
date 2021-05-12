function job(callback1, callback2) {
  let count = 0;
  let timer = setInterval(function() {
    callback2();
    count += 1;
    if (count > 2) {
      clearInterval(timer);
    }
  }, 1000);

  setTimeout(() => callback1(), 2000);
}

job(
  () => console.log("callback1"),
  () => console.log("calback2")
)();
