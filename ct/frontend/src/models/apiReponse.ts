import { Animal } from '../app/entity/Animal';

export interface AnimalApiResponse{
  '@context':string;
  '@id' : string;
  '@type': string;
  member:Animal[];
}
