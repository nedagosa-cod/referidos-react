import express from 'express';
import cors from 'cors';
import { PORT } from './config.js'
import indexRoutes from './routes/index.routes.js'
import crudsRoutes from './routes/cruds.routes.js'

const app = express();

app.use(cors())
app.use(express.json());
app.use(indexRoutes);
app.use(crudsRoutes);
app.listen(PORT)