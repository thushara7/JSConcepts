function moveZeroes3(arr) {
  arr.forEach((element, index) => {
    if (element === 0) {
      arr.splice(index, 1);
      arr.push(0);
      console.log("inside", arr);
    }
  });

  return arr;
}

console.log(moveZeroes3([0, 1, 0, 3, 12]));
