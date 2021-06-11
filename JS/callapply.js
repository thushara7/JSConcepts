console.log("it works a lot");

// var car = {
//   registrationNumber: "GA12345",
//   brand: "Toyota",

//   displayDetails: function() {
//     console.log(this.registrationNumber + " " + this.brand, this);
//   }
// };

// var brand = car;
// // console.log(brand.displayDetails()); // works like car
// // console.log(brand.registrationNumber); //GA12345
// brand.brand = "suzuki";
// console.log(car); // it changes
// console.log(brand); // it changed

// // var brand2 = new car(); //TypeError: car is not a constructor
// // brand2.registrationNumber = 1234;

const a = {
  b: 1,
  c: function() {
    //console.log(this);
    return this;
  },
  d() {
    console.log(this);
  },
  e: () => this
};
a.b = 3;

//console.log(a.c()); // {b: 3, c: ƒ, d: ƒ, e: ƒ}
//a.d();// {b: 3, c: ƒ, d: ƒ, e: ƒ}
//console.log(a.e()); // Window
//console.log(new a.c()); // {}
//console.log(new a.d()); //TypeError: a.d is not a constructor
//console.log(new a.e()); //TypeError: a.e is not a constructor

var func = function() {
  console.log(this);
}.bind(2);

func(); // Number {2} cz the first param is always the obj which it will bind too.

function checkFun(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}
checkFun.call(1, 2, 3, 4);
// [Number: 1] cz the first param is always the obj which it will bind too.
// 2
// 3
// 4
