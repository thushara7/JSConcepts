const obj = {
  one: function() {
    console.log("one", this);
  },
  two: () => console.log("two", this),
  three: function() {
    function four() {
      console.log("four", this);
    }
    return four();
  }
};
//case1:
obj.one(); // returns the obj.
obj.two(); // this = window obj
obj.three(); // window obj cz function four is not invoked using any obj.

//case2:
var inst1 = obj.one;
inst1(); // window cz this referes to the calling obj.
