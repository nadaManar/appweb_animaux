import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive,ActivatedRoute } from '@angular/router';
import { Animal } from '../../entity/Animal'
import { Observable } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-edit-animal',
  imports: [ RouterLink, RouterLinkActive, CommonModule , ReactiveFormsModule, MatSelectModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './edit-animal.component.html',
  styleUrl: './edit-animal.component.scss'
})
export class EditAnimalComponent {
  animal$: Observable<Animal>;

  animalId = -1
  
  animalForm = new FormGroup({
    nomCommun: new FormControl('', Validators.required),
    nomSavant: new FormControl('', Validators.required),
    embranchement: new FormControl('', Validators.required),
    classe: new FormControl('', Validators.required),
    ordre: new FormControl('', Validators.required),
    sousOrdre: new FormControl('', Validators.required),
    famille: new FormControl('', Validators.required),
    genre: new FormControl('', Validators.required),
    description: new FormControl(''),
    iucn: new FormControl('')
  })


    constructor(private animalService:AnimalService, private route: ActivatedRoute, private router: Router) {
      this.route.params.subscribe((params)=>{
        this.animalId = params['id']
      })
      this.animal$ = this.animalService.getAnimalById(this.animalId)
      this.animal$.subscribe((data)=>{
        this.animalForm.setValue({
        nomCommun: data.nomCommun,
        nomSavant: data.nomSavant,
        embranchement: data.embranchement,
        classe: data.classe,
        ordre: data.ordre,
        sousOrdre: data.sousOrdre,
        famille: data.famille,
        genre: data.genre,
        description: data.description,
        iucn: data.iucn
        })
      })

    }
    submit = () => {
     
      if (this.animalForm.valid) {
        
        if (this.animalForm.valid) {
          let formValues = this.animalForm.getRawValue()
          
          this.animalService.updateAnimal(
            this.animalId,
            formValues.nomCommun?? '',
            formValues.nomSavant ?? '',
            formValues.embranchement ?? '',
            formValues.classe ?? '',
            formValues.ordre  ?? '',
            formValues.sousOrdre  ?? '',
            formValues.famille  ?? '',
            formValues.genre  ?? '',
            formValues.description,
            formValues.iucn ?? ''
          ).subscribe((data:any)=> {
            this.router.navigate([`/animal/`, data.id])
          })
        }
        
      }
    }
}
