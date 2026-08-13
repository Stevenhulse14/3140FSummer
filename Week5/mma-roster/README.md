# Full-Stack Routing: React + Express + PostgreSQL

## Today's Goal

Today we are going to build a small **full-stack MMA Fighter Roster application**.

The main focus is **routing** and understanding how data moves through a full-stack application.

By the end of class, students should understand this flow:

```text
USER
  ↓
REACT PAGE
  ↓
FRONTEND ROUTE
  ↓
FETCH REQUEST
  ↓
EXPRESS ROUTE
  ↓
PG
  ↓
POSTGRESQL DATABASE
  ↓
JSON RESPONSE
  ↓
REACT
  ↓
UPDATED UI
```

---

# 1. Technologies

### Frontend

* React
* Vite
* React Router DOM
* JavaScript
* CSS
* `fetch()`

### Backend

* Node.js
* Express
* `pg`
* CORS
* dotenv

### Database

* PostgreSQL

---

# 2. The Application

We will build an:

# MMA Fighter Roster

The application will eventually allow us to:

* View all fighters
* View one fighter
* Add a fighter
* Edit a fighter
* Delete a fighter

Example fighter:

```js
{
  id: 1,
  name: "Jon Jones",
  nickname: "Bones",
  division: "Heavyweight",
  wins: 28,
  losses: 1
}
```

---

# 3. Architecture

Before writing code, draw this on the board:

```text
┌─────────────────────┐
│       Browser       │
│                     │
│    React + Vite     │
└──────────┬──────────┘
           │
           │ HTTP Request
           │
           ▼
┌─────────────────────┐
│   Express Server    │
│                     │
│ GET /fighters       │
│ GET /fighters/:id   │
│ POST /fighters      │
│ PUT /fighters/:id   │
│ DELETE /fighters/:id│
└──────────┬──────────┘
           │
           │ pg
           ▼
┌─────────────────────┐
│     PostgreSQL      │
│                     │
│   fighters table    │
└─────────────────────┘
```

### Important Question

**Does React talk directly to PostgreSQL?**

No.

React communicates with our **Express API**.

Express communicates with **PostgreSQL**.

---

# 4. Two Different Types of Routing

This is the biggest concept for today's lesson.

We have **frontend routes** and **backend routes**.

## Frontend Routing

React Router controls **what the user sees**.

```text
/
 /fighters
 /fighters/1
 /fighters/new
 /fighters/1/edit
```

Example:

```jsx
<Route path="/fighters" element={<Fighters />} />
```

This means:

> When the browser visits `/fighters`, display the Fighters component.

---

## Backend Routing

Express controls **what data the application can request or modify**.

```text
GET    /api/fighters
GET    /api/fighters/:id
POST   /api/fighters
PUT    /api/fighters/:id
DELETE /api/fighters/:id
```

Example:

```js
app.get("/api/fighters", (req, res) => {
  // Get fighters from PostgreSQL
});
```

This means:

> When a GET request is made to `/api/fighters`, retrieve fighter data.

---

# 5. Frontend Route vs Backend Route

These are NOT the same thing.

| Purpose               | Frontend           | Backend             |
| --------------------- | ------------------ | ------------------- |
| Technology            | React Router       | Express             |
| Handles               | Pages              | Data                |
| `/fighters`           | Show fighters page | —                   |
| `GET /api/fighters`   | —                  | Return fighter data |
| `/fighters/3`         | Show fighter page  | —                   |
| `GET /api/fighters/3` | —                  | Return fighter #3   |

A student should be able to explain:

> React Router decides which component to display. Express routes decide what happens when the frontend requests data.

---

# 6. Project Structure

```text
mma-roster/
│
├── client/
│   └── src/
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Fighters.jsx
│       │   ├── FighterDetails.jsx
│       │   └── AddFighter.jsx
│       │
│       ├── App.jsx
│       └── main.jsx
│
└── server/
    ├── routes/
    │   └── fighters.js
    │
    ├── db.js
    ├── seed.js
    ├── server.js
    └── .env
```

---

# PART I — DATABASE

# 7. Create PostgreSQL Database

Create the database:

```sql
CREATE DATABASE mma_roster;
```

Our table:

```sql
CREATE TABLE fighters (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  nickname VARCHAR(100),
  division VARCHAR(100),
  wins INTEGER DEFAULT 0,
  losses INTEGER DEFAULT 0
);
```

Add some fighters:

```sql
INSERT INTO fighters
(name, nickname, division, wins, losses)
VALUES
('Jon Jones', 'Bones', 'Heavyweight', 28, 1),
('Alex Pereira', 'Poatan', 'Light Heavyweight', 13, 3),
('Islam Makhachev', NULL, 'Welterweight', 27, 1);
```

Now we actually have persistent data.

---

# PART II — EXPRESS + PG

# 8. Install Backend Dependencies

Inside `server`:

```bash
npm init -y
```

Then:

```bash
npm install express pg cors dotenv
```

---

# 9. PostgreSQL Connection

## db.js

```js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = pool;
```

Our `.env` could contain:

```text
DATABASE_URL=postgresql://postgres:password@localhost:5432/mma_roster
```

Explain:

```text
Express
   ↓
db.js
   ↓
pg Pool
   ↓
PostgreSQL
```

`pg` is the library allowing Node/Express to communicate with PostgreSQL.

---

# 10. Create the Express Server

## server.js

```js
const express = require("express");
const cors = require("cors");

const fighterRoutes = require("./routes/fighters");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/fighters", fighterRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

Notice:

```js
app.use("/api/fighters", fighterRoutes);
```

We are separating our routes from our main server.

This makes the application easier to organize as it grows.

---

# PART III — EXPRESS ROUTING

# 11. Fighter Router

## routes/fighters.js

```js
const express = require("express");
const router = express.Router();

const pool = require("../db");
```

Now we can build our CRUD routes.

---

# 12. GET All Fighters

```js
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM fighters ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server error",
    });
  }
});
```

Because `server.js` contains:

```js
app.use("/api/fighters", fighterRoutes);
```

and our router contains:

```js
router.get("/")
```

the complete URL becomes:

```text
GET /api/fighters
```

This is a great place to stop and ask students:

> Why isn't this route just `/`?

Because the router was mounted at `/api/fighters`.

---

# 13. GET One Fighter

```js
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM fighters WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Fighter not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});
```

Now:

```text
GET /api/fighters/2
```

produces:

```text
req.params.id
      ↓
     "2"
      ↓
PostgreSQL query
      ↓
fighter #2
      ↓
JSON
```

---

# 14. POST — Create Fighter

```js
router.post("/", async (req, res) => {
  try {
    const {
      name,
      nickname,
      division,
      wins,
      losses,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO fighters
      (name, nickname, division, wins, losses)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [name, nickname, division, wins, losses]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});
```

Discuss the difference:

```text
req.params
```

vs.

```text
req.body
```

`params` comes from the URL.

`body` comes from data sent with the request.

---

# 15. PUT — Update Fighter

```js
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      nickname,
      division,
      wins,
      losses,
    } = req.body;

    const result = await pool.query(
      `
      UPDATE fighters
      SET
        name = $1,
        nickname = $2,
        division = $3,
        wins = $4,
        losses = $5
      WHERE id = $6
      RETURNING *
      `,
      [name, nickname, division, wins, losses, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});
```

---

# 16. DELETE Fighter

```js
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      DELETE FROM fighters
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Server error",
    });
  }
});
```

At this point we have a complete CRUD API.

```text
CREATE → POST
READ   → GET
UPDATE → PUT
DELETE → DELETE
```

---

# PART IV — TEST THE BACKEND FIRST

# 17. Test Before React

Before touching the frontend, test the API.

### Get Fighters

```text
GET http://localhost:3000/api/fighters
```

### Get Fighter #1

```text
GET http://localhost:3000/api/fighters/1
```

### Create Fighter

```text
POST http://localhost:3000/api/fighters
```

Body:

```json
{
  "name": "Max Holloway",
  "nickname": "Blessed",
  "division": "Lightweight",
  "wins": 26,
  "losses": 8
}
```

Teaching point:

**Why are we testing the backend before building React?**

Because if something breaks later, we already know our API works.

---

# PART V — REACT ROUTING

# 18. Install React Router

Inside the frontend:

```bash
npm install react-router-dom
```

---

# 19. Setup Router

## main.jsx

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

---

# 20. Application Routes

## App.jsx

```jsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Fighters from "./pages/Fighters";
import FighterDetails from "./pages/FighterDetails";
import AddFighter from "./pages/AddFighter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/fighters"
        element={<Fighters />}
      />

      <Route
        path="/fighters/new"
        element={<AddFighter />}
      />

      <Route
        path="/fighters/:id"
        element={<FighterDetails />}
      />
    </Routes>
  );
}

export default App;
```

---

# PART VI — CONNECT FRONTEND TO BACKEND

# 21. Fighters Page

Now the two halves of our application finally meet.

## Fighters.jsx

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fighters() {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/fighters")
      .then((response) => response.json())
      .then((data) => {
        setFighters(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main>
      <h1>MMA Fighters</h1>

      {fighters.map((fighter) => (
        <div key={fighter.id}>
          <h2>{fighter.name}</h2>

          <p>
            {fighter.wins}-{fighter.losses}
          </p>

          <Link to={`/fighters/${fighter.id}`}>
            View Fighter
          </Link>
        </div>
      ))}
    </main>
  );
}

export default Fighters;
```

Walk through the request:

```text
Fighters.jsx

      ↓

fetch()

      ↓

GET localhost:3000/api/fighters

      ↓

Express

      ↓

fighters router

      ↓

pool.query()

      ↓

PostgreSQL

      ↓

result.rows

      ↓

res.json()

      ↓

React

      ↓

setFighters()

      ↓

Page updates
```

This is the core of today's lesson.

---

# PART VII — DYNAMIC ROUTING

# 22. Fighter Details Page

This connects a React route parameter with an Express route parameter.

Frontend URL:

```text
/fighters/2
```

React Router extracts:

```text
2
```

React requests:

```text
/api/fighters/2
```

Express extracts:

```text
2
```

PostgreSQL searches for:

```text
id = 2
```

---

## FighterDetails.jsx

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FighterDetails() {
  const { id } = useParams();

  const [fighter, setFighter] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/fighters/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFighter(data);
      });
  }, [id]);

  if (!fighter) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>{fighter.name}</h1>

      <h2>
        "{fighter.nickname}"
      </h2>

      <p>
        Division: {fighter.division}
      </p>

      <p>
        Record: {fighter.wins}-{fighter.losses}
      </p>
    </main>
  );
}

export default FighterDetails;
```

---

# 23. Follow One ID Through the Entire Stack

This is an important board exercise.

Suppose the user clicks:

```text
Alex Pereira
```

React navigates to:

```text
/fighters/2
```

Then:

```text
React Router

/fighters/:id
         ↓
        id=2

         ↓

useParams()

         ↓

fetch("/api/fighters/2")

         ↓

Express

/api/fighters/:id
              ↓
             id=2

         ↓

req.params.id

         ↓

SELECT * FROM fighters
WHERE id = $1

         ↓

PostgreSQL

         ↓

Alex Pereira

         ↓

JSON

         ↓

React

         ↓

Alex Pereira's page
```

---

# 24. The Three Routes Students Must Stop Confusing

### Browser Route

```text
/fighters/2
```

Purpose:

**What page should the user see?**

---

### API Route

```text
/api/fighters/2
```

Purpose:

**What data does the frontend want?**

---

### Database Query

```sql
SELECT *
FROM fighters
WHERE id = $1;
```

Purpose:

**What information should PostgreSQL return?**

These are three different layers solving three different problems.

---

# 25. Class Exercise

Give students this challenge:

### Task

Create a new page:

```text
/fighters/new
```

Create a form containing:

```text
Name
Nickname
Division
Wins
Losses
```

When the form is submitted, send:

```text
POST /api/fighters
```

The frontend should send:

```js
fetch("http://localhost:3000/api/fighters", {
  method: "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    name,
    nickname,
    division,
    wins,
    losses,
  }),
});
```

After successfully creating the fighter, navigate back to:

```text
/fighters
```

using:

```jsx
const navigate = useNavigate();

navigate("/fighters");
```

---

# 26. Bonus Challenge

Add a delete button to the Fighter Details page.

The button should send:

```text
DELETE /api/fighters/:id
```

Example:

```js
const deleteFighter = async () => {
  await fetch(
    `http://localhost:3000/api/fighters/${id}`,
    {
      method: "DELETE",
    }
  );

  navigate("/fighters");
};
```

Students now see that the same `id` travels through the entire application.

---

# 27. End-of-Class Questions

Students should be able to answer:

**1. What does React Router do?**

Controls which React component/page is displayed.

**2. What does Express Router do?**

Controls how the backend responds to HTTP requests.

**3. What does `pg` do?**

Allows our Node/Express application to communicate with PostgreSQL.

**4. What does `req.params` contain?**

Values coming from dynamic URL parameters.

```text
/api/fighters/7
              ↑
              id
```

**5. What does `req.body` contain?**

Data sent by the client, usually during POST or PUT requests.

**6. Should React directly connect to PostgreSQL?**

No. React communicates with the backend API.

**7. What is the complete data flow?**

```text
React
  ↓
fetch()
  ↓
Express Route
  ↓
pg
  ↓
PostgreSQL
  ↓
pg
  ↓
Express JSON Response
  ↓
React State
  ↓
UI
```

---

# 28. Final Takeaway

Today's most important concept isn't memorizing code.

Students should understand the separation of responsibilities:

```text
React Router
"What page?"

        ↓

Express Router
"What API endpoint?"

        ↓

pg
"How do I communicate with PostgreSQL?"

        ↓

PostgreSQL
"What data?"
```

Once students understand this pipeline, they understand the basic architecture behind a real full-stack application.
