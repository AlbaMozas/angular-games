import { PlanetInterface } from './../../shared/models/planet.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit{
  //1 - array con los planetas que vamos a pintar en el front
  //tipamos allCards para que no sea de tipo: any en (planet.interface.ts)
  allCards: PlanetInterface[] = [
    {
        id: 1,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 2,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 3,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 4,
        name: 'mercury',
        img: 'assets/mercury.svg'
    },
    {
        id: 5,
        name: 'saturn',
        img: 'assets/saturn.svg'
    },
    {
        id: 6,
        name: 'uranus',
        img: 'assets/uranus.svg'
    },
    {
        id: 7,
        name: 'earth',
        img: 'assets/earth.svg'
    },
    {
        id: 8,
        name: 'jupiter',
        img: 'assets/jupiter.svg'
    },
    {
        id: 9,
        name: 'mars',
        img: 'assets/mars.svg'
    },
    {
        id: 10,
        name: 'mercury',
        img: 'assets/mercury.svg'
    },
    {
        id: 11,
        name: 'saturn',
        img: 'assets/saturn.svg'
    },
    {
        id: 12,
        name: 'uranus',
        img: 'assets/uranus.svg'
    }
  ]

  //5 almacenamos en una variable para después comparar el primer click con el segundo
  selectedCard?: PlanetInterface; 

  initialCards?: PlanetInterface[];

  successCount = 0;

  //4 Implementamos oninit para que cuando se inicialice el componente las cartas se barajen.
  ngOnInit(){
    this.initialCards =JSON.parse(JSON.stringify(this.allCards));
    this.allCards = this.suffle(this.allCards)
  }

  suffle(array: any) {
    return array.sort(() => 0.5 - Math.random());
  }

  //5 al hacer click seleccionamos la carta
  checkedCard(card: PlanetInterface){
    if(this.selectedCard){
      if(this.selectedCard.name === card.name){
        card.checked = true;

        this.selectedCard.checked = true;
        this.selectedCard.selected = false;  
        this.selectedCard = undefined;

        this.successCount++;
      } else{
        card.selected = true;
        setTimeout(() => {
          card.selected = false;
          this.selectedCard!.selected = false;
          this.selectedCard = undefined;
        }, 500)
      }
    }else{
      this.selectedCard = card;
      card.selected = true;
    }
  }

  reset() {
    this.successCount = 0;
    this.allCards = this.suffle(this.initialCards);
  }
}