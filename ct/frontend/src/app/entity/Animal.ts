import { Observation } from './Obsarvation';
export interface Animal {
    id?: number;
    nomCommun: string;
    nomSavant: string;
    embranchement: string;
    classe: string;
    ordre: string;
    sousOrdre: string;
    famille: string;
    genre: string;
    description: string | null;
    iucn: string;
    Observations ?: Observation[];
  }