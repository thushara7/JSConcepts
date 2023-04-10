var string = "Welcome to this Javascript Guide!";

function reverseEveryWord(str) {
  let result = [];
  for (let word of str.split(" ")) {
    result.push(word.split("").reverse().join(""));
  }

  return result.join(" ");
}
console.log(reverseEveryWord(string));
