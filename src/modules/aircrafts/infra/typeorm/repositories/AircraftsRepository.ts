import { getRepository, Repository } from 'typeorm';

import ICreateAircraftDTO from '@modules/aircrafts/dtos/ICreateAircraftDTO';
import Aircraft from '@modules/aircrafts/infra/typeorm/entities/Aircraft';
import IAircraftsRepository from '@modules/aircrafts/repositories/IAircraftsRepository';

class AircraftsRepository implements IAircraftsRepository {
  private ormRepository: Repository<Aircraft>;

  constructor() {
    this.ormRepository = getRepository(Aircraft);
  }

  public async findById(id: string): Promise<Aircraft | undefined> {
    const aircraft = await this.ormRepository.findOne(id);
    return aircraft;
  }

  public async findByPrefixo(prefixo: string): Promise<Aircraft | undefined> {
    const aircraft = await this.ormRepository.findOne({
      where: { prefixo },
    });

    return aircraft;
  }

  public async create(aircraftData: ICreateAircraftDTO): Promise<Aircraft> {
    const aircraft = this.ormRepository.create(aircraftData);
    await this.ormRepository.save(aircraft);

    return aircraft;
  }

  public async save(aircraft: Aircraft): Promise<Aircraft> {
    return this.ormRepository.save(aircraft);
  }
}

export default AircraftsRepository;
