function USER(name, surname) {
  this.name = name;
  this.surname = surname;
}

var U1 = new USER("agadh", "Gupta");
var U2 = new USER("thush", "Joseph");

function v2() {}
function getUsers(...users) {
  debugger;
  // method1: works
  const usersArray = [...users];
  return usersArray;

  // method2 gives undefined cz settime out takes place after the return and then array was empty
  // const usersArray = [];
  // setTimeout(() => (usersArray = [...users]), 1);
  // return usersArray;

  //solution for method2  is using a callback.
}

function findUsers(name, users) {
  const result = users.find((el) => el.name === name);
  return result;
}
let userSet = getUsers(U1, U2);
let searchUser = findUsers("agadh", userSet);
console.log("searchUser", searchUser);
