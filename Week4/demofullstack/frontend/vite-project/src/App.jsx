import "./App.css";

import { useState, useEffect } from "react";

function App() {
  // arr[1,2] -> 1 variable 2nd function
  const [pokemondata, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("http://localhost:3014/");
        const json = await data.json();
        setPokemonData(json);

        console.log(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {pokemondata.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>Type: {item.type}</p>
            <p>HP: {item.hp}</p>
            <img src={item.location} alt={item.name} />
          </div>
        );
      })}
    </>
  );
}
export default App;
