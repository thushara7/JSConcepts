// when we use new:
// 1. a new obj is created against the constructor function.
//2. this poiints to the newly created obj

function myfunction() {
  return this;
}

var own1 = myfunction();
own1.a = 100;
console.log(own1); // returns window obj
console.log(own1.a === window.own1.a); // returns true cz we are assigning new prop to the window obj.

var own2 = new myfunction();
own2.a = 200;
