//this in a normal function refers to the obj which calls it. it does not inherits its parents this.

// arrow function: this refers to the this where it is defined. it does not have its own this. it inherits its parents this

var age=20;

let person1 ={
    age:30,
    greet1:function(){
        console.log('normal function', this.age)  // this logs 30

        var greet2 = () => console.log('nested',this.age) // 30
            
        function greet3 (){
            console.log('nested normal',this.age) 
        }
        greet3() //20 cz its a normal function and this refers to the calling object and here its called withi=out a context and hence this is the window object
        greet2() //30 cz  greet2 is defined inside p1 and this refers to p1
    }
}

person1.greet1()
