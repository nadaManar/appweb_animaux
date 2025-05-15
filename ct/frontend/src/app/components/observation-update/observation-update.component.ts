import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObservationService } from '../../services/observation.service';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Observation } from '../../entity/Obsarvation';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../entity/Animal';
import {NgForOf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-observation-update',
  templateUrl: './observation-update.component.html',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    MatButton,
    MatFormFieldModule,
    MatInput,
    MatSelectModule,

  ],
  styleUrls: ['./observation-update.component.scss']
})
export class ObservationUpdateComponent implements OnInit {
  observationForm!: FormGroup;
  observationId!: number;
  observationData!: Observation;
  animals: Animal[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private observationService: ObservationService,
    private fb: FormBuilder,
    private router: Router,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {

    this.observationId = Number(this.activatedRoute.snapshot.paramMap.get('id'));


    this.observationForm = this.fb.group({
      dateHeure: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: ['', Validators.required],
      animal: [null, Validators.required]
    });


    this.observationService.getObservationById(this.observationId).subscribe((data: Observation) => {
      this.observationData = data;

      const animalId = this.extractAnimalId(data.animal);

      console.log("ID de l'animal dans les données de l'observation:", animalId);

      this.observationForm.patchValue({
        dateHeure: data.dateHeure,
        latitude: data.latitude,
        longitude: data.longitude,
        description: data.description,
        animal: animalId
      });
    });

    this.animalService.getAnimals().subscribe((animals: Animal[]) => {
      this.animals = animals;
      console.log("Liste des animaux:", this.animals);
    });
  }

  extractAnimalId(animal: any): number | null {
    if (typeof animal === 'string' && animal.includes('/api/animals/')) {
      const parts = animal.split('/');
      return Number(parts[parts.length - 1]);
    }
    return animal?.id || null;
  }

  submit(): void {
    if (this.observationForm.valid) {
      const formValues = this.observationForm.value;
      const selectedAnimalId = parseInt(formValues.animal, 10);


      console.log('Animaux disponibles:', this.animals);

      const selectedAnimal = this.animals.find(a => a.id === selectedAnimalId);

      if (!selectedAnimal) {
        console.error('Animal non trouvé. ID recherché:', selectedAnimalId);
        return;
      }

      this.observationService.updateObservation(
        this.observationId!,
        formValues.dateHeure,
        formValues.latitude,
        formValues.longitude,
        formValues.description,
        selectedAnimal
      ).subscribe({
        next: () => this.router.navigate(['/observations']),
        error: (err) => console.error('Erreur mise à jour:', err)
      });
    }
  }}
