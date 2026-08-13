const express = require("express");
const cors = require("cors");

// const fighterRoutes = require("./routes/fighters");

const app = express();

// Middleware
// app.use(cors());
// app.use(express.json());

// Mount fighter routes at /api/fighters
// app.use("/api/fighters", fighterRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
