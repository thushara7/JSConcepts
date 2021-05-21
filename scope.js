var a = 2;
var b = 3;
var obj = {
  a: 1,
  b: 2,
  add: function() {
    console.log(this.a + this.b);
  }
};
//calling function add with respect to object obj
obj.add(); //3
var result = obj.add;
//GEC, var a and var b are defined on window object
result(); // 5

//** this refers to the immediate obj and not chaining */
var a = 2;
var b = 3;
var obj = {
  a: 1,
  b: 2,
  childObj: {
    c: 3,
    add: function() {
      console.log(this.a + " " + this.b + " " + this.c);
    }
  }
};
obj.childObj.add(); // undefined undefined 3
