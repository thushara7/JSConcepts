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
