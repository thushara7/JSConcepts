//--------------example1----------------
function Animal(sound) {
  this.sound = sound;
}

var cat = new Animal("meow");
var dog = new Animal("woof");

Animal.prototype.makeSound = function () {
  console.log(this.sound);
};
cat.makeSound();
dog.makeSound();

//--------------example2----------------
function Reactange(width, height) {
  this.width = width;
  this.height = height;
}
Reactange.prototype.area = function () {
  return this.width * this.height;
};

var R1 = new Reactange(4, 3);
var R2 = new Reactange(4, 2);
console.log(R1.area());
console.log(R2.area());

function Square(length) {
  this.width = length;
  this.height = length;
}

// we are coping one mehod for functio  to another using Object. create (sub class)
Square.prototype = Object.create(Reactange.prototype);
var s1 = new Square(5);
console.log(s1.area());
//-------------------------------
