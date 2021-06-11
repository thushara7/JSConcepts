//Object.freeze
// cannot alter, add, delete immediate props.

let obj = {
  name: "thushara",
  age: 27,
  add: {
    city: "baroda"
  }
};

Object.freeze(obj);
obj.name = "agadh"; // does not change
obj.status = "married"; // no error, doesnot add
obj.add.country = "india"; // works!
delete obj.name; // doesnot work
delete obj.add.country; // works
console.log(obj);

//seal also does the same but we can modify existing props
