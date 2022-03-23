"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

var _CreateAircraftService = _interopRequireDefault(require("../../../services/CreateAircraftService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AircraftsController {
  async create(req, res) {
    const {
      prefixo,
      modelo,
      modelo_motor,
      serie_celula,
      serie_motor,
      fabricante_celula,
      fabricante_motor,
      data_fabricante_celula,
      data_fabricante_motor,
      usage,
      hora_celula,
      hora_motor,
      n1,
      n2,
      pousos
    } = req.body;

    const createAircraft = _tsyringe.container.resolve(_CreateAircraftService.default);

    const aircraft = await createAircraft.execute({
      prefixo,
      modelo,
      modelo_motor,
      serie_celula,
      serie_motor,
      fabricante_celula,
      fabricante_motor,
      data_fabricante_celula,
      data_fabricante_motor,
      usage,
      hora_celula,
      hora_motor,
      n1,
      n2,
      pousos
    });
    return res.json((0, _classTransformer.classToClass)(aircraft));
  }

}

exports.default = AircraftsController;