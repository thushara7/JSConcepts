function foo() {
  function bar() {
    return 3;
  }
  return bar();
  function bar() {
    return 8;
  }
}
console.log(foo());
// ouput : 8
// both the bar functions will be hoisted and the later funstion will be used
//-------------------------------
console.log("thushara");
function parent() {
  var hoisted = "I'm a variable";
  function hoisted() {
    return "I'm a function";
  }
  return hoisted();
}
const res = parent();
console.log(res);
//output is error
//Now, in such a case of multiple declarations(variable and function in the same scope) with the same identifier, the hoisting of variables is simply IGNORED. The the interpreter comes across the function declaration and hoists it.
//Finally, the statement of variable assignment (which was not hoisted) is executed and “I’m a variable” is assigned to hoisted, which is a simple string value and not a function. Hence the error!
//-------------------------------
alert(foo());
function foo() {
  var bar = function() {
    return 3;
  };
  return bar();
  var bar = function() {
    return 8;
  };
}
// output is 3
//The second bar() will not be read by the interpreter ahead of time (no hoisting). The first one will be executed and returned.
//-------------------------------
var myVar = "foo";
(function() {
  console.log("Original value was: " + myVar);
  var myVar = "bar";
  console.log("New value is: " + myVar);
})();

//Original value was: undefined
// New value is: bar

// inside a function the new var variable is hoisted.
//-------------------------------
console.log(y); // ReferenceError: y is not defined
y = 1;

var y = undefined;
console.log(y); //undefined
y = 2;

var y = undefined;
y = 3;
console.log(y); // 3

//-------------------------------
function a() {
  console.log("1");
}
a();
function a() {
  console.log("2");
}
a();
// 2,2 cz functions are first hoisted and then called.
//-------------------------------
//** important */

var test = 1;
function functionHoisting() {
  //function Hoisting, test is re-defined and re-declared
  function test() {}
  test = 10; // this test refers to the local scope.

  return;
}
functionHoisting();
console.log(test); // 1

//**---------------------------------- */
//** function expressions are  not hoisted */
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}
alert(a()); // 3
//------------function definition are hoisted therefore latest declaration is taken into account.-------------
function a() {
  function b() {
    return 3;
  }
  //Function Hoisting
  function b() {
    return 8;
  }
  return b();
}
alert(a()); // 8
