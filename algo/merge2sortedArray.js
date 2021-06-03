var mergeTwoLists = function(l1, l2) {
  let output = [];
  let p1 = 0;
  let p2 = 0;

  if (l1.length === 0 && l2.length == 0) return [];
  else if (l1.length === 0) return l2;
  else if (l2.length === 0) return l1;
  else {
    while (l1.length > 0 && l2.length > 0) {
      if (l1[p1] === l2[p2]) {
        output.push(l1.shift());
        output.push(l2.shift());
        p1 += 1;
        p2 += 1;
      } else if (l1[p1] < l2[p2]) {
        output.push(l1.shift());
        p1 += 1;
      } else {
        output.push(l2.shift());
        p2 += 1;
      }
    }
    return output;
  }
};

var result = mergeTwoLists([1, 2, 4], [1, 3, 4]); //Output: [1,1,2,3,4,4]
console.log(result);
