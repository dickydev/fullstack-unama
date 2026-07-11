async function fetchApi() {
  try {
    const data = await fetch('http://localhost:3000/hello');
    const result = await data.json();

    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}
fetchApi();
