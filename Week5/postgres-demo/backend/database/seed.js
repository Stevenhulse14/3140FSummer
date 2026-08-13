const pool = require("./db");

const fighters = [
  { name: "Jon Jones", division: "Heavyweight" },
  { name: "Alex Pereira", division: "Light Heavyweight" },
  { name: "Tom Aspinall", division: "Heavyweight" },
  { name: "Israel Adesanya", division: "Middleweight" },
  { name: "Islam Makhachev", division: "Lightweight" },
  { name: "Noel Madera", division: "Heavyweight" },
  { name: "Yan Chao Feng", division: "Light Heavyweight" },
];

async function seed() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS fighters (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        division TEXT NOT NULL
      );
    `);

    // clear existing rows and reset id counter
    await pool.query("TRUNCATE TABLE fighters RESTART IDENTITY;");

    for (const fighter of fighters) {
      await pool.query(
        "INSERT INTO fighters (name, division) VALUES ($1, $2)",
        [fighter.name, fighter.division],
      );
    }

    console.log(`Seeded ${fighters.length} fighters.`);
  } catch (err) {
    console.error("Seed failed:", err);
  } finally {
    await pool.end();
  }
}

seed();
