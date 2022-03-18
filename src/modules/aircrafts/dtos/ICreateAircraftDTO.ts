export default interface ICreateAircraftDTO {
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
