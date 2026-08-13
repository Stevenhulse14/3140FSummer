const pool = require("./db");

// Seed the fighters table for class demos
async function seed() {
  try {
    // CREATE TABLE IF NOT EXISTS fighters (...)
    // TRUNCATE TABLE fighters RESTART IDENTITY;
    // INSERT sample fighters (Jon Jones, Alex Pereira, Islam Makhachev)
    console.log("TODO: seed fighters table");
  } catch (error) {
    console.error("Seed failed:", error);
  } finally {
    await pool.end();
  }
}

seed();
