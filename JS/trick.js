(function () {
  var a = (b = 5);
})();

console.log(b); /// logs 5 since b is declared as a global variable which can be accessible in the global scope also
