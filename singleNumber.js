function singleNumber(nums) {
  let result;
  let myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let n1 = nums[i];
    if (!myMap.has(n1)) {
      myMap.set(n1, 1);
    } else {
      myMap.set(n1, myMap.get(n1) + 1);
    }
  }

  myMap.forEach((values, keys) => {
    if (values === 1) result = keys;
  });
  return result;
}

let res = singleNumber([2, 2, 1, 1, 5]);
console.log(res);
