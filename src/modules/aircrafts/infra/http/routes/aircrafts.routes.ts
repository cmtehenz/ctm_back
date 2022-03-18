import { Router } from 'express';

import ensureAuthenticated from '@shared/infra/http/middlewares/ensureAuth';

import AircraftsController from '../controllers/AircraftsController';
import validateAircraftCreate from '../validators/AircraftCreate';
// import validateFuelList from '../validators/FuelList';

const aircraftsRouter = Router();
const aircraftsController = new AircraftsController();
aircraftsRouter.use(ensureAuthenticated);

// aircraftsRouter.get('/', validateFuelList, fuelsController.index);
aircraftsRouter.post('/', validateAircraftCreate, aircraftsController.create);
// fuelsRouter.get('/total/:month', validateFuelList, fuelsController.findTotal);
// notesRouter.get("/", notesController.index);
// notesRouter.delete("/:id", notesController.delete);
// notesRouter.put("/:note_id", notesController.update);

export default aircraftsRouter;
