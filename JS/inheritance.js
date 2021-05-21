function Cat(name, energy, declawed) {
  //**so that we can get access to all the props and functions in the constructor function by binding the this of this child */
  Animal.call(this, name, energy);

  this.declawed = declawed;
}
//** here we are pointing the proto of the child to that of the parent so that we can inherit the methods defined in the parent's proto */
//** downside is that it overwrites the construction function. so now the Cat constructor function does not exists since. */
Cat.prototype = Object.create(Animal.prototype);
//** to bring back the constructor function we do this */
Cat.prototype.constructor = Cat;
//** now we can add methods to childs proto also. */
Cat.prototype.meow = function() {
  console.log("Meow!");
  this.energy -= 0.1;
};
