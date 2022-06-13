import * as express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import planetsRoutes from './Routes';

config();

const app: express.Express = express.default();
const PORT = Number(process.env.PORT);

app.use(cors())
app.use(express.json());

app.use(planetsRoutes);

app.listen(PORT, () => console.log('planets api runnnig at: ', PORT))