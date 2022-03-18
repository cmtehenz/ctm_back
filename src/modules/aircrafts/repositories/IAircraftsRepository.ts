import ICreateAircraftDTO from '../dtos/ICreateAircraftDTO';
import Aircraft from '../infra/typeorm/entities/Aircraft';

export default interface IAircraftsRepository {
  findById(id: string): Promise<Aircraft | undefined>;
  findByPrefixo(prefixo: string): Promise<Aircraft | undefined>;
  create(data: ICreateAircraftDTO): Promise<Aircraft>;
  save(aircraft: Aircraft): Promise<Aircraft>;
}
