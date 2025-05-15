import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../../services/observation.service';
import { Observation } from '../../entity/Obsarvation';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatDivider, MatList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-observation-list',
  imports: [
    MatButton,
    MatList,
    RouterLink,
    MatListItem,
    MatDivider
  ],
  templateUrl: './observation-list.component.html',
  styleUrls: ['./observation-list.component.scss']
})
export class ObservationListComponent implements OnInit {
  observations: Observation[] = [];
  nextPage: string ='';
  constructor(private observationService: ObservationService, private router: Router) { }

  ngOnInit() {
 this.loadObservations();

  }
  loadObservations(): void{

    this.observationService.getObservations().subscribe((data: any) => {
      console.log(data);
      this.observations = data.member;
      this.nextPage = data.view?.next || '';

    });
  }
  loadNextPage(): void{
    if(this.nextPage){
      this.observationService.getObservationsUrl(this.nextPage).subscribe((data: any) =>{
        const newL = data.member || [];
        this.observations = [
          ...this.observations,
          ...newL.filter(
            (ol: { id: number | undefined; }) => !this.observations.some((o) => o.id === ol.id)
          )
        ];
        this.nextPage =data.view?.next || '';
      });

    }
    else {
      console.log('aucune page suivante');
    }
  }

  delete(id: number | undefined): void {
    if(id !==undefined && !isNaN(id)){


    if (confirm('Êtes-vous sûr de vouloir supprimer cette observation ?')) {
      this.observationService.deleteObservation(id).subscribe(
        () => {
          this.observations = this.observations.filter(obs => obs.id !== id);

        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'observation:', error);
        }
      );
    }
    }
  }

  viewObservation(id: number): void {
    console.log(`Voir les détails de l'observation ${id}`);

  }
}
