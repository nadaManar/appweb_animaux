import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, Observable} from 'rxjs';
import { Observation } from '../entity/Obsarvation';
import { Animal } from '../entity/Animal';
@Injectable({
  providedIn: 'root'
})

export class ObservationService {

  private apiUrl = 'http://localhost:8082/api/observations';

  constructor(private http: HttpClient) { }

  getObservations(): Observable<Observation[]> {
    return this.http.get<Observation[]>(this.apiUrl).pipe(
      map(data =>data || [])
      );

  }

  getObservationsUrl(url: string): Observable<any> {
    const apiUrl = `http://localhost:8000${url}`;
    return this.http.get<any>(apiUrl).pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'appel de l\'API:', error);
        throw new Error('Une erreur est survenue lors de l\'appel de l\'API');
      })
    );
  }




  getObservationById(id: number): Observable<Observation> {
    return this.http.get<Observation>(`${this.apiUrl}/${id}`);
  }

  createObservation(dateHeure: string, latitude: number, longitude: number, description: string | null, animal: Animal): Observable<Observation> {
    if(!animal.id){
      throw new Error('id ');
    }
    const observationData: Observation = {
      dateHeure,
      latitude,
      longitude,
      description,
      animal:`/api/animals/${animal.id}`
    };
     console.log('data',JSON.stringify(observationData))
    return this.http.post<Observation>(this.apiUrl, observationData, {
      headers: new HttpHeaders({ 'Content-Type': 'application/ld+json' })
    });
  }


  updateObservation(
    id: number,
    dateHeure: string,
    latitude: number,
    longitude: number,
    description: string | null,
    animal: Animal
  ): Observable<Observation> {
    if (!animal.id) {
      throw new Error('L\'animal doit avoir un ID valide');
    }

    const payload = {
      dateHeure,
      latitude,
      longitude,
      description,
      animal: `/api/animals/${animal.id}` 
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/merge-patch+json'
    });

    return this.http.patch<Observation>(
      `${this.apiUrl}/${id}`,
      payload,
      { headers }
    ).pipe(
      catchError(error => {
        console.error('Erreur lors de la mise à jour:', error);
        throw error;
      })
    );
  }



  deleteObservation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

