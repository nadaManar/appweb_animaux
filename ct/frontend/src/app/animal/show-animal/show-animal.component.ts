import { MatDividerModule } from '@angular/material/divider';
import { Component } from '@angular/core';
import { Router,RouterLink,RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../entity/Animal';
import { ActivatedRoute } from '@angular/router';
import { CommonModule ,AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-show-animal',
  imports: [RouterLink, RouterLinkActive ,AsyncPipe, CommonModule, MatButtonModule, MatCardModule, MatDividerModule],
  templateUrl: './show-animal.component.html',
  styleUrl: './show-animal.component.scss'
})
export class ShowAnimalComponent {

  animal$: Observable<Animal>;

  animalId = -1

  constructor(private animalService: AnimalService, private route: ActivatedRoute, private router: Router) {
      this.route.params.subscribe((params)=>{
      this.animalId = params['id']
    })
    this.animal$ = this.animalService.getAnimalById(this.animalId);
  }

  modify() {
    this.router.navigate(["/animal", this.animalId, "edit"])
  }

  delete() {
    this.animalService.deleteAnimal(this.animalId).subscribe(()=>{this.router.navigate(["/animals"])})
  }

}
