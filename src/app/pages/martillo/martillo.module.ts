import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MartilloRoutingModule } from './martillo-routing.module';
import { MartilloComponent } from './martillo.component';


@NgModule({
  declarations: [
    MartilloComponent
  ],
  imports: [
    CommonModule,
    MartilloRoutingModule
  ]
})
export class MartilloModule { }
