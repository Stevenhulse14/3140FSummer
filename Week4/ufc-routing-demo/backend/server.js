const express = require("express");
const cors = require("cors");

//CRUD
/**

C - Create 
R - Read
U - Update
D - Delete



 */
const app = express();

const PORT = 3001;

let fighters = [
  { id: 1, name: "Jon Jones", division: "Heavyweight" },
  { id: 2, name: "Alex Pereira", division: "Light Heavyweight" },
];

// Middleware
app.use(cors());
app.use(express.json());

// READING
app.get("/fighters", (req, res) => {
  res.json(fighters);
});
app.get("/fighters/matchup", (req, res) => {
  // const { division } = req.query

  const matches = fighters.filter(
    (fighter) => fighter.division === "Light Heavyweight",
  );
  res.json({
    division: "Light Heavyweight",
    fighter1: matches[0],
    fighter2: matches[1],
  });
});

//dynamic routing READING
app.get("/fighters/:id", (req, res) => {
  const id = +req.params.id;
  const fighter = fighters.find((fighter) => fighter.id === id);
  console.log(fighter);
  res.json(fighter);
});

// CREATE
app.post("/fighters", (req, res) => {
  const index = fighters.length
    ? Math.max(...fighters.map((f) => f.id)) + 1
    : 1;
  const newFighter = {
    id: index,
    name: req.body.name,
    division: req.body.division,
  };

  fighters.push(newFighter);
  res.status(201).json(newFighter);
});
// UPDATE
app.put("/fighters/:id", (req, res) => {
  const id = +req.params.id;
  const fighterindex = fighters.findIndex((fighter) => fighter.id === id);

  const updatedFighter = {
    id: id,
    name: req.body.name,
    division: req.body.division,
  };
  console.log(Object.values(req.body));

  fighters[fighterindex] = updatedFighter;

  res.json(updatedFighter);
});
//DELETE
//app.delete();

app.listen(PORT, () =>
  console.log(` Your up and running on Port : ${PORT} ! `),
);
