import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimalService } from '../../services/animal.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-add-animal',
  imports: [RouterLink, RouterLinkActive, CommonModule, MatButtonModule, MatCardModule, MatFormFieldModule,ReactiveFormsModule, MatSelectModule, MatInputModule],
  templateUrl: './add-animal.component.html',
  styleUrl: './add-animal.component.scss'
})
export class AddAnimalComponent {

  animalForm: FormGroup;

  submit = () => {
    if (this.animalForm.valid) {
      let formValues = this.animalForm.getRawValue()
      console.log(formValues)
      this.animalService.createAnimal(
        formValues.nomCommun,
        formValues.nomSavant,
        formValues.embranchement,
        formValues.classe,
        formValues.ordre,
        formValues.sousOrdre,
        formValues.famille,
        formValues.genre,
        formValues.description,
        formValues.iucn
   
      ).subscribe((data:any)=> {
        console.log(data)
        this.router.navigate([`/animal/`, data.id])
      })
    }
  }

  
  

  constructor(private animalService: AnimalService, private router: Router, private fb: FormBuilder) {
    this.animalForm = this.fb.group({
      nomCommun: ['', Validators.required],
      nomSavant: ['', Validators.required],
      embranchement: ['', Validators.required],
      classe: ['', Validators.required],
      ordre: ['', Validators.required],
      sousOrdre: ['', Validators.required],
      famille: ['', Validators.required],
      genre: ['', Validators.required],
      description: [''],
      iucn: ['']
    });


  }

}
