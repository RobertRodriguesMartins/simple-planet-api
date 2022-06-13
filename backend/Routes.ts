import express from 'express';
import * as controllerPlanets from './controllers/planets'

const router: express.Router = express.Router();

router.get('/planets', controllerPlanets.default);

export default router;
