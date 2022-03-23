"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IAircraftsRepository = _interopRequireDefault(require("../repositories/IAircraftsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateAircraftService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('AircraftsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IAircraftsRepository.default === "undefined" ? Object : _IAircraftsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateAircraftService {
  constructor(aircraftsRepository) {
    this.aircraftsRepository = aircraftsRepository;
  }

  async execute({
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
  }) {
    const checkAircraftExists = await this.aircraftsRepository.findByPrefixo(prefixo);

    if (checkAircraftExists) {
      throw new _AppError.default('Prefixo already used.');
    }

    const aircraft = await this.aircraftsRepository.create({
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
    return aircraft;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateAircraftService;
exports.default = _default;