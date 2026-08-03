import express from "express";

const port = 3003;
const app = express();

app.get("/", (request, response) => {
  response.send(" Whats up Class 3140!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
