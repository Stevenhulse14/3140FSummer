async function getDitto() {
  const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
  const response = await fetch(URL);
  const data = await response.json();

  console.log(data);
}

getDitto();
