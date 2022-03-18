import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAircraftService from '@modules/aircrafts/services/CreateAircraftService';

export default class AircraftsController {
  public async create(req: Request, res: Response): Promise<Response> {
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
    } = req.body;

    const createAircraft = container.resolve(CreateAircraftService);

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
    });

    return res.json(classToClass(aircraft));
  }
}
