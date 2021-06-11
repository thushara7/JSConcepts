var slicedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// slice
//(startnumber, endnumber)
// does not change the original array
// if endnumber < startnumber --> []
var sliced0 = slicedArray.slice(3); // [3, 4, 5, 6, 7, 8, 9]
var slicedPosition = slicedArray.slice(3, 8); // [3, 4, 5, 6, 7]

// console.log("sliced", sliced0);
// console.log("slicedPosition", slicedPosition);
// console.log("slicedArray", slicedArray);
// -----------------------------------------

//splice (startnumber, deletecount)

//Removes elements from an array and,
//if necessary, inserts new elements in their place,
//returning the deleted elements.
var splicedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var result1 = splicedArray.splice(3, 3);
// console.log("splicedArray", splicedArray); //// [0, 1, 2, 6, 7, 8, 9]
// console.log("result1", result1); //[3, 4, 5]
