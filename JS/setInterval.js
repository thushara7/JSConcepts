// setInterval

function test() {
  let count = 0;
  let timer = setInterval(() => {
    var text = "hello" + count;
    console.log(text);
    count += 1;
    if (count > 8) {
      clearInterval(timer);
    }
  }, 1000);
}

test();
