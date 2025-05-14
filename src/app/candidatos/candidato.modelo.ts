export class Candidato {
  id: number;
  nombre: string;
  paisOrigen: string;
  edad: number;
  vertienteReligiosa: string;
  foto: string;

  constructor(
    id: number,
    nombre: string,
    paisOrigen: string,
    edad: number,
    vertienteReligiosa: string,
    foto: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.paisOrigen = paisOrigen;
    this.edad = edad;
    this.vertienteReligiosa = vertienteReligiosa;
    this.foto = foto;
  }
}