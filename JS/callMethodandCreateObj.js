//usage of call is to bind a context of this to a function.

// reusable function:
function calBonus(){
    console.log(`the bonus of ${this.name} is ${this.salary + 5000}`)
}

// constructor function to create objs so that its easy construct new objs
function Employee (name,salary){
    this.name = name;
    this.salary = salary
}
let emp3 = new Employee('payal',8000)

// object creation using normal method.
let emp1 ={
    name :'thushara',
    salary:3000
}
let emp2 ={
    name :'Ag',
    salary:5000
}
calBonus.call(emp3)