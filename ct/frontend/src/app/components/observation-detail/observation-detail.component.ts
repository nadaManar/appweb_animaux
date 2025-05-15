import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import { ObservationService } from '../../services/observation.service';
import { Observation } from '../../entity/Obsarvation';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-observation-detail',
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './observation-detail.component.html',
  styleUrl: './observation-detail.component.scss'
})
export class ObservationDetailComponent implements OnInit{
  observations$: Observable<Observation> | undefined ;

  constructor(
    private route : ActivatedRoute,
    private observationService: ObservationService
  ) {
  }

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.observations$ = this.observationService.getObservationById(id);
}


}
