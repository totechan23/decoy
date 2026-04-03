const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'testdb',
});

app.use(express.json());

// 🔥 SQL Injection Vulnerability
app.get('/user', async (req, res) => {
    const name = req.query.name;

    try {
        const query = `SELECT * FROM users WHERE name = '${name}'`;
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (err) {
        res.send(err.toString());
    }
});

// 🔥 No Authentication
app.get('/admin', (req, res) => {
    res.send("🔥 Welcome Admin Panel (No Auth)");
});

// Normal route
app.get('/', (req, res) => {
    res.send("Decoy Backend Running");
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});
