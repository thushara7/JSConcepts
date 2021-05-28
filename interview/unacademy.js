import * as React from "react";

import "./styles.css";

// for (var i = 0; i < 5; i++) {
//   (function block(i) {
//     // console.log(i);
//     setTimeout(() => {
//       console.log(i);
//     }, 0);
//   })(i);
// }

function run() {
  const a = {
    b: 1,
    c: function() {
      //console.log(this);
      return this;
    },
    d() {
      console.log(this);
    },
    e() {
      console.log(this);
      return this;
    }
  };
  a.b = 3;

  // console.log(a.c());
  // console.log(a.d());
  // console.log(a.e());
  // console.log(new a.c());
  // console.log(new a.d());
  // console.log(new a.e());

  // console.log(a.c().d().e());
  // console.log(a.d().c().e());
  // console.log(a.c().d().c().e());
  // console.log(a.c().d().c().d().c().c().d());
}

// lazyText(text, delay)

// lazyText('hi', 3);

function lazyText(text, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => resolve(text), delay);
  });
}

function sub(x, y) {
  return x - y;
}

// (async function () {
//   console.log(await sub(1, 2));
// })();

async function callAPI() {
  const result = await lazyText("thushara", 100);
  console.log(result);
  // const final = await result.then(data => console.log(data))
}

// callAPI();

run();

console.log("hi");
// console.log(i);

function add(a, b) {
  var result = a + b;

  return function(a) {
    return result + a;
  };
}

// console.log(add(1, 4)(5));

export default function App() {
  return (
    <div className="App">
      <div className="box" />
    </div>
  );
}

console.log(y);
let y = 10;
