import { Router } from "express";
import { getRows } from '../controllers/fncruds.controllers.js'

const router = Router();

router.get('/home', getRows)

export default router;