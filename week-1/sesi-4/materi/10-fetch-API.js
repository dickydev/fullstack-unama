fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => data.json())
  .then((result) => console.log(result));
