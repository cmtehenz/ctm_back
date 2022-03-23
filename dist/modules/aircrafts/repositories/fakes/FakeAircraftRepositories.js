"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuid = require("uuid");

var _Aircraft = _interopRequireDefault(require("../../infra/typeorm/entities/Aircraft"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeAircraftsRepository {
  constructor() {
    this.aircrafts = [];
  }

  async findById(id) {
    const findAircraft = this.aircrafts.find(aircraft => aircraft.id === id);
    return findAircraft;
  }

  async findByPrefixo(prefixo) {
    const findAircraft = await this.aircrafts.find(aircraft => aircraft.prefixo === prefixo);
    return findAircraft;
  }

  async create(aircraftData) {
    const aircraft = new _Aircraft.default();
    Object.assign(aircraft, {
      id: (0, _uuid.v4)()
    }, aircraftData);
    this.aircrafts.push(aircraft);
    return aircraft;
  }

  async save(aircraft) {
    const findIndex = this.aircrafts.findIndex(findAircraft => findAircraft.id === aircraft.id);
    this.aircrafts[findIndex] = aircraft;
    return aircraft;
  }

}

var _default = FakeAircraftsRepository;
exports.default = _default;