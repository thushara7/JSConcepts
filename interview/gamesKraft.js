// digital clock
function updateTime() {
  setInterval(() => {
    let todayTime = new Date();
    console.log(
      `${todayTime.getHours()}:${todayTime.getMinutes()}:${todayTime.getSeconds()}`
    );
  }, 1000);
}
updateTime();

// destructure
var a = {
  name: "agadh",
  address: {
    city: "vadodara"
  }
};

var b = a;
var c = create(a);
a.name = "thushara";
a.address.city = "blr";

console.log("a", a); // both will same cz same reference.
console.log("b", b);
console.log("c", c);

function create(obj) {
  let result = {};
  for (let [index, val] of Object.entries(obj)) {
    console.log(index, typeof val === "object");
    result[index] = decode(val);
  }

  return result;
}

function decode(item) {
  if (typeof item === "string") return item;
  if (typeof item === "object") return { ...item };
}
