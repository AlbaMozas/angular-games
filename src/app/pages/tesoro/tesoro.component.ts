import { TesoroInterface } from './../../shared/models/tesoro.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tesoro',
  templateUrl: './tesoro.component.html',
  styleUrls: ['./tesoro.component.scss']
})
export class TesoroComponent implements OnInit{

  gameTreasure?: any = [];
  // gameTreasure?: TesoroComponent = [];
 
  rows = 3; cols = 7; 
  
  treasure = false;
  win = false;
  shots = 0;

  diferentRow = 0;
  diferentColumn = 0;

  start(row: number, col: number) {
    if (this.win) {      
      return;
    } else {
      this.shots++;
      this.gameTreasure![row][col].clicked = true;
      if (this.gameTreasure![row][col].treasure) {
        this.win = true;
      }
    }
  }

  init(){
    console.log("init");
    this.shots=0;
    this.win=false;
    this.diferentRow = Math.floor(Math.random() * this.rows);
    this.diferentColumn = Math.floor(Math.random() * this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (row === this.diferentRow && col === this.diferentColumn) {
          this.treasure = true;
        } else {
          this.treasure = false;
        }
        this.gameTreasure![row][col] = {
          x: row, y: col,
          treasure: this.treasure,
          clicked: false,
        };
      }
    }
  }

  ngOnInit(){
    for (let row = 0; row < this.rows; row++) {
      this.gameTreasure![row] = [];
    }
    console.log(this.gameTreasure);

    this.init();


    console.log(this.gameTreasure);
  }
}
