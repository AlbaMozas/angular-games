import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martillo',
  templateUrl: './martillo.component.html',
  styleUrls: ['./martillo.component.scss']
})
export class MartilloComponent implements OnInit {
  //array principal
  gameMartillo?: any[] = [];

  rows: number = 3;
  diferentRow: number = 0;
  colums: number = 4;
  diferentColum: number = 0;

  mole: boolean = false;
  //duracion del juego
  seconds:number = 60;
  lastPosition: any;
  theScore: number = 0;

  // message: number =  0;

  ngOnInit() {
    for (let row = 0; row < this.rows; row++) {
      this.gameMartillo![row] = [];
    }
    this.init();
    this.gamePlay(this.seconds,this.lastPosition);
  };


init(){
  // this.message = 0;
  for (let row = 0; row < this.rows; row++) {
    for (let col = 0; col < this.colums; col++) {
      if (row === this.diferentRow && col === this.diferentColum) {
        this.mole = true;
      } else {
        this.mole = false;
      }
      this.gameMartillo![row][col] = {
        x: row,
        y: col,
        mole: this.mole,
        clicked: false,
      };
    }
  }

};


gamePlay = async (seconds: any,lastPosition: any ) => {
  this.seconds -= 1;
  //para hacer el contador hacia delante
  // this.seconds += 1;

  // La función Math.ceil() devuelve el entero mayor o igual más próximo a un número dado.
  let position = Math.ceil(Math.random() *6);
  while (position === lastPosition) {
      position = Math.ceil(Math.random() *6);
  }
  lastPosition = position;
  this.init()

  if(seconds > 0){
    this.diferentRow = Math.floor(Math.random() * this.rows);
    this.diferentColum = Math.floor(Math.random() * this.colums);
    setTimeout(() => this.gamePlay(this.seconds,this.lastPosition), 550);
  }else{}
  // if(seconds === 0){
  //   this.message;
  // }
};


golpe(row: number, col: number){
  if(this.gameMartillo![row][col].mole){
    this.gameMartillo![row][col].mole = false;
    this.diferentRow = Math.floor(Math.random() * this.rows);
    this.diferentColum = Math.floor(Math.random() * this.colums);
    this.gameMartillo![this.diferentRow][this.diferentColum].mole = false;
    this.theScore++;
  }
};

}

