const input = [0, 1, 2, 5, 11, 15, 8, 23, 13, 7, 8];
var twoSum = function(nums, target) {
  let values = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log(diff);
    if (values[diff] !== undefined) return [values[diff], i];
    values[nums[i]] = i;
  }
};
console.log(twoSum(input, 9));
