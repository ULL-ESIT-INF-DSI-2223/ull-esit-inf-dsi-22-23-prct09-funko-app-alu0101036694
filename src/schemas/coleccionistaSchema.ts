import { Funko } from "../code/funko.js";

export type coleccionistaSchema = {
  Coleccionista: {
    id: number;
    nombre: string;
    coleccion: Funko[];
  }[];
};
