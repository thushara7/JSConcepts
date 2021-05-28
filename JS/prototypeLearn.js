function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};

function Rectangle() {
  // Shape.call(this,params)
}
//extended
Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();
rect.move(1, 1);
console.log("x:", rect.x);
