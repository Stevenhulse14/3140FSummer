const express = require("express");
const router = express.Router();

const pool = require("../db");

// GET /api/fighters — return all fighters
// router.get("/", async (req, res) => {
//   // pool.query("SELECT * FROM fighters ORDER BY id")
// });

// GET /api/fighters/:id — return one fighter
// router.get("/:id", async (req, res) => {
//   // req.params.id → WHERE id = $1
// });

// POST /api/fighters — create a fighter
// router.post("/", async (req, res) => {
//   // req.body → INSERT ... RETURNING *
// });

// PUT /api/fighters/:id — update a fighter
// router.put("/:id", async (req, res) => {
//   // req.params.id + req.body → UPDATE ... RETURNING *
// });

// DELETE /api/fighters/:id — delete a fighter
// router.delete("/:id", async (req, res) => {
//   // req.params.id → DELETE ... RETURNING *
// });

module.exports = router;
