import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  DeleteDateColumn,
} from 'typeorm';

@Unique(['prefixo'])
@Entity('aircrafts')
class Aircraft {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  prefixo: string;

  @Column()
  modelo: string;

  @Column()
  modelo_motor: string;

  @Column()
  serie_celula: string;

  @Column()
  serie_motor: string;

  @Column()
  fabricante_celula: string;

  @Column()
  fabricante_motor: string;

  @Column()
  data_fabricante_celula: Date;

  @Column()
  data_fabricante_motor: Date;

  @Column()
  usage: number;

  @Column()
  hora_celula: number;

  @Column()
  hora_motor: number;

  @Column()
  n1: number;

  @Column()
  n2: number;

  @Column()
  pousos: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default Aircraft;
