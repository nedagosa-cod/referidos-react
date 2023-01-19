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



export const createRefer = async (req, res) => {
    const {
        name_e,
        documento_e,
        telefono_e,
        antiguedad_e,
        campana_e,
        sede_e,
        nombre_r,
        documento_r,
        telefono_r,
        telefono_rii,
        campana_r_1,
        sede_r_1,
    } = req.body
    try {
        let createSql = 
        "INSERT INTO users (name_e, documento_e, telefono_e, antiguedad_e, campana_e, sede_e, nombre_r, telefono_r, telefono_rii, campana_r, sede_r, estado, fecha, documento_r)" +
        "VALUES" + 
        `('${name_e}', ${documento_e}, ${telefono_e}, '${antiguedad_e}', '${campana_e}', '${sede_e}', '${nombre_r}', ${telefono_r}, ${telefono_rii}, '${campana_r_1}', '${sede_r_1}', 'Pendiente', NOW(), '${documento_r}');`

        const resultado = await pool.query(createSql)
        res.send(resultado)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}