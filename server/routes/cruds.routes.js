import { Router } from "express";
import { getRows, createRefer } from '../controllers/fncruds.controllers.js'

const router = Router();

router.get('/home', getRows)
router.post('/referir', createRefer)

export default router;