import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { Animal } from '../../entity/Animal';

import {  RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-list-animals',
  imports: [RouterLink, CommonModule, MatListModule, MatButtonModule, ],
  templateUrl: './list-animals.component.html',
  styleUrl: './list-animals.component.scss'
})
export class ListAnimalsComponent {
  animalList: Animal[] = [];
  favoris: Animal[]= [];
  popups: {[key: number]: boolean} = {};
  popupsC: Set<number> = new Set();
  Coeur = false;

  constructor(private animalService: AnimalService) {
    this.animalService.getAnimals().subscribe((animals: Animal[])=>{
      this.animalList = animals;

    });


  }
  addToFavorites(animal: Animal): void {
    if(!this.favoris.includes(animal)){
      this.favoris.push(animal);
      console.log(this.favoris);
      this.showpopup(animal);
      this.popupsC.add(animal.id!);
      this.Coeur = true;
      setTimeout(()=>{
        this.Coeur = false;
      },1000);
    }
  }
  removeFromFavorites(animal: Animal): void{
    const index = this.favoris.indexOf(animal);
    if(index > -1){
      this.favoris.splice(index, 1);
      this.popupsC.delete(animal.id!);
      this.popups[animal.id!] = false;
      console.log('supp',animal.id!);
    }
  }
  isFavorite(animal: Animal): boolean {
    return this.favoris.includes(animal);
  }
  showpopup(animal: Animal): void{
    this.popups[animal.id!] = true;
    setTimeout(() => {
      // @ts-ignore
      this.popups[animal.id] = false;
    }, 100000);
  }
  ispopupv(animal: Animal): boolean{
    return this.popups[animal.id!];
  }
}


