import { FunkoType, FunkoGenre } from "../code/funko.js";

export type funkoSchema = {
  Funko: {
    id: number;
    name: string;
    description: string;
    type: FunkoType;
    genre: FunkoGenre;
    franchise: string;
    number: number;
    exclusive: boolean;
    specialFeatures: string;
    marketValue: number;
  }[];
};
