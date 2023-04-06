// constructor function
function Person() {
  (this.name = "John"), (this.age = 23);
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = "male";

// adding a method to the constructor function
Person.prototype.greet = function () {
  console.log("hello" + " " + this.name);
};

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);

//*****If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value.

///****If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function */
// changing property
Person.prototype.name = "Peter";
console.log(person1.name); // John

// accessing prototype property of the contructor from an object
console.log(person1.__proto__);
