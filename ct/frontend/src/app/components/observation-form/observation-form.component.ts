import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObservationService } from '../../services/observation.service';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../entity/Animal';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-observation',
  imports: [

    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './observation-form.component.html',
  styleUrls: ['./observation-form.component.scss']
})
export class ObservationFormComponent {

  observationForm: FormGroup;
  animals: Animal[] = [];

  constructor(
    private animalService: AnimalService,
    private observationService: ObservationService,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.observationForm = this.fb.group({
      dateHeure: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: ['', Validators.required],
      animal: [null, Validators.required]
    });


    this.animalService.getAnimals().subscribe((animals: Animal[]) => {
      this.animals = animals;
    });
  }

  submit(): void {
    if (this.observationForm.valid) {
      const formValues = this.observationForm.getRawValue();
      console.log(formValues);

      const selectedAnimal = this.animals.find(a => a.id === formValues.animal);
      if (!selectedAnimal) {
        console.error('Animal non trouvé');
        return;
      }


      this.observationService.createObservation(
        formValues.dateHeure,
        parseFloat(formValues.latitude),
        parseFloat(formValues.longitude),
        formValues.description,
        selectedAnimal
      ).subscribe((data: any) => {
        console.log('Observation créée :', data);

        this.router.navigate([`/observations`]);
      }, error => {
        console.error('Erreur lors de la création de l\'observation :', error);
      });
    } else {
      console.log('Formulaire invalide', this.observationForm.errors);
    }
  }
}
