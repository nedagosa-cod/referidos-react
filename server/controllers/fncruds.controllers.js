import { pool } from "../db.js"

export const getRows = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM railway.users');
    res.json(rows)
    console.log(rows)
}