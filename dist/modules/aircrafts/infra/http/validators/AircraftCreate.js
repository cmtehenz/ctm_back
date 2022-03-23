"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _celebrate = require("celebrate");

var _default = (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    prefixo: _celebrate.Joi.string().required(),
    modelo: _celebrate.Joi.string().required(),
    modelo_motor: _celebrate.Joi.string().required(),
    serie_celula: _celebrate.Joi.string().required(),
    serie_motor: _celebrate.Joi.string().required(),
    fabricante_celula: _celebrate.Joi.string().required(),
    fabricante_motor: _celebrate.Joi.string().required(),
    data_fabricante_celula: _celebrate.Joi.date().required(),
    data_fabricante_motor: _celebrate.Joi.date().required(),
    usage: _celebrate.Joi.number().default(0),
    hora_celula: _celebrate.Joi.number().required(),
    hora_motor: _celebrate.Joi.number().required(),
    n1: _celebrate.Joi.number().required(),
    n2: _celebrate.Joi.number().required(),
    pousos: _celebrate.Joi.number().required()
  }
});

exports.default = _default;