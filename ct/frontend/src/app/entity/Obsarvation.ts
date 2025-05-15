import { Animal } from './Animal';
export interface Observation {
    id?: number;
    dateHeure: string;
    latitude: number;
    longitude: number;
    description: string | null;
    animal: string;
  }
