import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    async function fetchFighters() {
      const response = await fetch("http://localhost:3001/fighters");
      const data = await response.json();
      setFighters(data);
    }
    fetchFighters();
  }, []);

  console.log("fighters", fighters);
  return (
    <>
      {fighters.map((fighter) => (
        <div key={fighter.id}>
          <h2>{fighter.name}</h2>
          <p>{fighter.division}</p>
        </div>
      ))}
    </>
  );
}

export default App;
