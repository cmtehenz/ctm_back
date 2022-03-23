/* eslint-disable @typescript-eslint/no-unused-vars */
import AppError from '@shared/errors/AppError';

import FakeAircraftRepository from '../repositories/fakes/FakeAircraftRepositories';
import CreateAircraftService from './CreateAircraftService';

let fakeAircraftRepository: FakeAircraftRepository;
let createAircraft: CreateAircraftService;

describe('CreateAircraft', () => {
  beforeEach(() => {
    fakeAircraftRepository = new FakeAircraftRepository();

    createAircraft = new CreateAircraftService(fakeAircraftRepository);
  });

  it('should be able to create a new aircraft', async () => {
    const aircraft = await createAircraft.execute({
      prefixo: 'PR-TES',
      modelo: 'Modelo Teste',
      modelo_motor: 'turbo teste',
      serie_celula: '12345',
      serie_motor: '4433',
      fabricante_celula: 'AIRBUS',
      fabricante_motor: 'fab motor',
      data_fabricante_celula: new Date(),
      data_fabricante_motor: new Date(),
      usage: 4.9,
      hora_celula: 1256.8,
      hora_motor: 1256.8,
      n1: 2434.51,
      n2: 1875.63,
      pousos: 1345,
    });

    expect(aircraft).toHaveProperty('id');
  });

  it('should not be able to create two aircrafts with the same prefixo', async () => {
    await createAircraft.execute({
      prefixo: 'PR-TES',
      modelo: 'Modelo Teste',
      modelo_motor: 'turbo teste',
      serie_celula: '12345',
      serie_motor: '4433',
      fabricante_celula: 'AIRBUS',
      fabricante_motor: 'fab motor',
      data_fabricante_celula: new Date(),
      data_fabricante_motor: new Date(),
      usage: 4.9,
      hora_celula: 1256.8,
      hora_motor: 1256.8,
      n1: 2434.51,
      n2: 1875.63,
      pousos: 1345,
    });

    await expect(
      createAircraft.execute({
        prefixo: 'PR-TES',
        modelo: 'Modelo Teste',
        modelo_motor: 'turbo teste',
        serie_celula: '12345',
        serie_motor: '4433',
        fabricante_celula: 'AIRBUS',
        fabricante_motor: 'fab motor',
        data_fabricante_celula: new Date(),
        data_fabricante_motor: new Date(),
        usage: 4.9,
        hora_celula: 1256.8,
        hora_motor: 1256.8,
        n1: 2434.51,
        n2: 1875.63,
        pousos: 1345,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
