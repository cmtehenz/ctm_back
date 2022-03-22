import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: {
    prefixo: Joi.string().required(),
    modelo: Joi.string().required(),
    modelo_motor: Joi.string().required(),
    serie_celula: Joi.string().required(),
    serie_motor: Joi.string().required(),
    fabricante_celula: Joi.string().required(),
    fabricante_motor: Joi.string().required(),
    data_fabricante_celula: Joi.date().required(),
    data_fabricante_motor: Joi.date().required(),
    usage: Joi.number().default(0),
    hora_celula: Joi.number().required(),
    hora_motor: Joi.number().required(),
    n1: Joi.number().required(),
    n2: Joi.number().required(),
    pousos: Joi.number().required(),
  },
});
