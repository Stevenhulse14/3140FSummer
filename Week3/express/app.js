import express from "express";

const port = 3003;
const app = express();

app.get("/", (request, response) => {
  response.send(" Whats up Class 3130!");
});
// app.get();
// app.post();
// app.delete();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
