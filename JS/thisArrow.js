var greeting = 'hi';

const obj = {
  greeting: 'hey',

  fo() {
    console.log('fo',this) //obj object cz regular function, the this refers to the obj calling it.
    const greeting = 'hola';
    
    // arrow function inherits the this of the parent where it is defined.
      const arrowFo = () => {
        console.log('arrowFo',this) //obj object ---> bc its called inside the fo which is inside obj object!!!
        console.log(this.greeting);
      };
      // named function takes the this from where its called. no inheritence
      function regFo () {
        console.log('regFo',this) //obj object ---> bc its called inside the fo!!!
        console.log(this.greeting);
        
      };
    // regFo.call(this) //this refers to the this of the fo function .
     // regFo()// this refers to the window obj since there is no context specified.
     // arrowFo();
  },
  foArrow :()=> {
    console.log('foArrow',this) //window object cz arrow takes the scope of the calling scope.
    const greeting = 'hola';
    
      const arrowFo = () => {
        console.log('arrowFo',this) //window object ---> bc its called inside the fo and also the foArrow is arrow function and the this!!!
        console.log(this.greeting);
      };

      arrowFo();
  }
};
//obj.fo();// logs: hey
//obj.foArrow(); //logs: hi






//regfunction takes the this of the calling obj
// arrow function takes this of the declaration







////-------------------best example

//--------------arrow functions always takes the scope of the parent function in which it is defined.. if no parent function is then it is the window obj.
// obj

var example ={
  age:10,
  newArrow:()=> console.log('this is the new arrow',this),
  foNamed : function(){
      console.log('foNamed global this',this)

      function nestedNamed(){
      console.log('nested named this',this)

      }
     // nestedNamed()// this =  window obj
     // nestedNamed.call(example)//this = example obj

     let nestedArrow =() => console.log('nested Arrow >>>',this)

     nestedArrow() // takes the this of the parent that is foNAmed function
     this.newArrow = ()=> console.log('this is the new arrow',this)
  },
  foArrow : ()=>{
      console.log("globalThis for the forArrow",this)
      

  }
}

//example.foNamed()// this will example obj
//example.foNamed.call()// this will window obj
//example.foArrow() // this = scope of the parent function == window
//example.foArrow.call(example) // this = scope of the parent function == window
//

//example.foNamed(); if this is not there then the scope of new arrow will be window since that will be the parensts scope
example.newArrow(); // this will always be the this of the fonamed function.
