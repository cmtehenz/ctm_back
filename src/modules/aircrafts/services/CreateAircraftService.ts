import { injectable, inject } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import AppError from '@shared/errors/AppError';

import Aircraft from '@modules/aircrafts/infra/typeorm/entities/Aircraft';

import IAircraftsRepository from '../repositories/IAircraftsRepository';

interface IRequest {
  prefixo: string;
  modelo: string;
  modelo_motor: string;
  serie_celula: string;
  serie_motor: string;
  fabricante_celula: string;
  fabricante_motor: string;
  data_fabricante_celula: Date;
  data_fabricante_motor: Date;
  usage: number;
  hora_celula: number;
  hora_motor: number;
  n1: number;
  n2: number;
}

@injectable()
class CreateAircraftService {
  constructor(
    @inject('AircraftsRepository')
    private aircraftsRepository: IAircraftsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({
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
  }: IRequest): Promise<Aircraft> {
    const checkAircraftExists = await this.aircraftsRepository.findByPrefixo(
      prefixo,
    );

    if (checkAircraftExists) {
      throw new AppError('Prefixo already used.');
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
    });

    return aircraft;
  }
}

export default CreateAircraftService;
