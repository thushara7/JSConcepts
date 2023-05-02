async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (res) => res.json()
  );
  console.log(res);
}
getData();
