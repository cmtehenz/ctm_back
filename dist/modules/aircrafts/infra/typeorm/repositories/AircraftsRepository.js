"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Aircraft = _interopRequireDefault(require("../entities/Aircraft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AircraftsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Aircraft.default);
  }

  async findById(id) {
    const aircraft = await this.ormRepository.findOne(id);
    return aircraft;
  }

  async findByPrefixo(prefixo) {
    const aircraft = await this.ormRepository.findOne({
      where: {
        prefixo
      }
    });
    return aircraft;
  }

  async create(aircraftData) {
    const aircraft = this.ormRepository.create(aircraftData);
    await this.ormRepository.save(aircraft);
    return aircraft;
  }

  async save(aircraft) {
    return this.ormRepository.save(aircraft);
  }

}

var _default = AircraftsRepository;
exports.default = _default;