const pool = require('../services/dbService');

exports.getUser = async (req, res) => {
    const name = req.query.name;

    try {
        // 🔥 Intentional SQL Injection vulnerability
        const query = `SELECT * FROM users WHERE name = '${name}'`;
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.toString());
    }
};
