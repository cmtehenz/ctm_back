import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createAircrafts1647983996235
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'aircrafts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'prefixo',
            type: 'varchar',
          },
          {
            name: 'modelo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'modelo_motor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'serie_celula',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'serie_motor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'fabricante_celula',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'fabricante_motor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'data_fabricante_motor',
            type: 'timestamp',
          },
          {
            name: 'data_fabricante_celula',
            type: 'timestamp',
          },
          {
            name: 'usage',
            type: 'float',
            isNullable: true,
          },
          {
            name: 'hora_celula',
            type: 'float',
          },
          {
            name: 'hora_motor',
            type: 'float',
          },
          {
            name: 'n1',
            type: 'float',
          },
          {
            name: 'n2',
            type: 'float',
          },
          {
            name: 'pousos',
            type: 'integer',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('aircrafts');
  }
}
