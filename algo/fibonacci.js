function printFibo(n) {
  let res = [0, 1];
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      res[i] = res[i - 1] + res[i - 2];
    }
  }
  return res;
}
console.log(printFibo(4));

//using recursion
function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// take nth term input from the user
const nTerms = prompt("Enter the number of terms: ");

if (nTerms <= 0) {
  console.log("Enter a positive integer.");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
  }
}
