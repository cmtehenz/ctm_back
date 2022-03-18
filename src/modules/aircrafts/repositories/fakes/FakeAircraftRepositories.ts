import { v4 as uuid } from 'uuid';

import ICreateAircraftDTO from '@modules/aircrafts/dtos/ICreateAircraftDTO';
import Aircraft from '@modules/aircrafts/infra/typeorm/entities/Aircraft';
import IAircraftsRepository from '@modules/aircrafts/repositories/IAircraftsRepository';

class FakeAircraftsRepository implements IAircraftsRepository {
  private aircrafts: Aircraft[] = [];

  public async findById(id: string): Promise<Aircraft | undefined> {
    const findAircraft = this.aircrafts.find(aircraft => aircraft.id === id);

    return findAircraft;
  }

  public async findByPrefixo(prefixo: string): Promise<Aircraft | undefined> {
    const findAircraft = await this.aircrafts.find(
      aircraft => aircraft.prefixo === prefixo,
    );

    return findAircraft;
  }

  public async create(aircraftData: ICreateAircraftDTO): Promise<Aircraft> {
    const aircraft = new Aircraft();

    Object.assign(aircraft, { id: uuid() }, aircraftData);

    this.aircrafts.push(aircraft);

    return aircraft;
  }

  public async save(aircraft: Aircraft): Promise<Aircraft> {
    const findIndex = this.aircrafts.findIndex(
      findAircraft => findAircraft.id === aircraft.id,
    );

    this.aircrafts[findIndex] = aircraft;

    return aircraft;
  }
}

export default FakeAircraftsRepository;
