"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuth = _interopRequireDefault(require("../../../../../shared/infra/http/middlewares/ensureAuth"));

var _AircraftsController = _interopRequireDefault(require("../controllers/AircraftsController"));

var _AircraftCreate = _interopRequireDefault(require("../validators/AircraftCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import validateFuelList from '../validators/FuelList';
const aircraftsRouter = (0, _express.Router)();
const aircraftsController = new _AircraftsController.default();
aircraftsRouter.use(_ensureAuth.default); // aircraftsRouter.get('/', validateFuelList, fuelsController.index);

aircraftsRouter.post('/', _AircraftCreate.default, aircraftsController.create); // fuelsRouter.get('/total/:month', validateFuelList, fuelsController.findTotal);
// notesRouter.get("/", notesController.index);
// notesRouter.delete("/:id", notesController.delete);
// notesRouter.put("/:note_id", notesController.update);

var _default = aircraftsRouter;
exports.default = _default;