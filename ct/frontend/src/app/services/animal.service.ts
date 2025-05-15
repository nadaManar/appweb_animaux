import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Animal } from '../entity/Animal';
import { HttpHeaders } from '@angular/common/http';
import {AnimalApiResponse} from '../../models/apiReponse';
@Injectable({
  providedIn: 'root'
})

export class AnimalService {
  private apiUrl = 'http://localhost:8082/api/animals';

  constructor(private http: HttpClient) { }

  // Exemple de service
  getAnimals(): Observable<Animal[]> {
    return this.http.get<AnimalApiResponse>(this.apiUrl).pipe(
      map((response: AnimalApiResponse) => response.member) // Extraction du tableau 'member'
    )
  }



  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  createAnimal(nomCommun: string,
    nomSavant: string,
    embranchement: string,
    classe: string,
    ordre: string,
    sousOrdre: string,
    famille: string,
    genre: string,
    description: string | null,
    iucn: string): Observable<Animal> {

      let animalData = {
        "nomCommun": nomCommun,
        "nomSavant": nomSavant,
        "embranchement": embranchement,
        "classe": classe,
        "ordre": ordre,
        "sousOrdre": sousOrdre,
        "famille": famille,
        "genre": genre,
        "description": description,
        "iucn": iucn
      };
    return this.http.post<Animal>(this.apiUrl, animalData ,
      {

        headers: new HttpHeaders({'Content-Type': 'application/ld+json'})
      }
    )
  }

  updateAnimal(id: number, nomCommun: string, nomSavant: string, embranchement: string,classe: string,ordre: string,sousOrdre: string,famille: string,genre: string,description: string | null,iucn: string): Observable<Animal> {

    return this.http.patch<Animal>(`${this.apiUrl}/${id}`, {
      "nomCommun": nomCommun,
      "nomSavant": nomSavant,
      "embranchement": embranchement,
      "classe": classe,
      "ordre": ordre,
      "sousOrdre": sousOrdre,
      "famille": famille,
      "genre": genre,
      "description": description,
      "iucn": iucn
    },
    {
      headers: new HttpHeaders({ 'Content-Type': 'application/merge-patch+json' })
    })
  }

  deleteAnimal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
