import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesoroRoutingModule } from './tesoro-routing.module';
import { TesoroComponent } from './tesoro.component';


@NgModule({
  declarations: [
    TesoroComponent
  ],
  imports: [
    CommonModule,
    TesoroRoutingModule
  ]
})
export class TesoroModule { }
