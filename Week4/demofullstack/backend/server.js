const { pokemon } = require("./data");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
//home route
app.get("/", (req, res) => {
  res.send(pokemon);
});

app.get("/secure", (req, res) => {
  res.send("Hello class 3140!");
});

app.get("/profile", (req, res) => {
  res.send("Look at me update in real time !");
});

app.listen(3014, () => console.log(`Your up and running on Port : ${3014}`));
//console.log(pokemon);
