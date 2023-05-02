// 10th April
//Q1
//make a custom method on a obj to get the next day.
var myDate = new Date();
Date.prototype.getTomorrow = function () {
  return new Date().getDay() + 1;
};
console.log(myDate.getTomorrow());

//q2
//var let cont hoisting
function test() {
  console.log(num);
  var num = 10;
}

//q3
//curring sum(1)(2)(3)   also write this where there are n calls.
const mul = (x) => {
  return (y) => {
    return (z) => {
      return x * y * z;
    };
  };
};

// for n objs

//my feeling
// I wanted to clear this round but somehow i feel disappointed.
