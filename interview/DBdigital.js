const { printToScreen } = require("./util");

// ### Tech-Question-1
// Write a function to recursively read a directory and print the list of all the files as an array.
// e.g.
// ```
// .
// ├─ folder-1
// |    ├─ file-1
// |    └─ folder-1.1
// |        └─ file-2
// ├─ folder-2
// |    ├─ file-3
// |    └─ file-4
// └─ file-5

// result : ['file-1', 'file-2', 'file-3', 'file-4', 'file-5']

const fs = require("fs");
const files = fs.readdirSync("./test"); //
fs.statSync("./test");

function recursiveReadDir(dirPath) {
  console.log(dirPath);
  let output = [];
  //...your code goes here
  let arr = fs.readdirSync(`./${dirPath}`); //['folder-1', 'file-1.js','file-2.js']

  for (let item of arr) {
    let type = checkType(item);
    if (type === "file") output.push(item);
    else if (type === "dir") {
      recursiveReadDir(item);
    }
  }
  return output;
}

function checkType(path) {
  path.splice(path.length - 2, 2);
  console.log("checkType", path);
  let type = "";
  if (fs.statSync(`./${path}`).isDirectory()) {
    type = "dir";
  } else {
    path.splice(path.length - 2, 2);

    // if (fs.statSync(`./${path}`).isFile()) {
    //   type = "file";
    // }
  }

  return type;
}

//printToScreen(JSON.stringify(fs.statSync("./test").isDirectory()));
printToScreen(recursiveReadDir("test"));

//main recur
// output arr;
// extract the array of stringd [file, folders]
// loop through this array
// for each item --> check dir or file
// if file --> push the file into the array.
// if dir --> let child output  = call the main function ( dir)
// append the items into the parent array.
// check path is file or director
