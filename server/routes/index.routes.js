import { Router } from 'express';
import { pool } from '../db.js'

const router = Router();

router.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM railway.users')
    console.log(rows[1])
    res.json(rows[1])
})

export default router;