import { pool } from "../db.js"

export const getRows = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM railway.users');
        res.json(rows)
        console.log(rows)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}