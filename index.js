//todo
//1.findPerms of a given string
//2. fibonacci
// heaps algo
// logic = no of permutation = n! = n*(n-1)

//3.linked list
//4.binary tree and search
//5.destrucrure an object

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, val) {
  // exit condition key has
  if (Object.values(obj).includes(val)) {
    return true;
  }
  if (Object.keys(obj).length === 0) return false;
  // recursion condition
  const nextKey = Object.keys(obj)[0];
  return contains(obj[nextKey], val);
}
console.log(contains(nestedObject, "foo2"));
