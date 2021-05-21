//nested callback
// to print 1,2,3,4,5 in each passing seconds
setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(2);
    setTimeout(() => {
      console.log(3);
      setTimeout(() => {
        console.log(4);
        setTimeout(() => {
          console.log(5);
        }, 500);
      }, 400);
    }, 300);
  }, 200);
}, 100);
