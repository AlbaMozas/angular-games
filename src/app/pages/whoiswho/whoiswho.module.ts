import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoiswhoRoutingModule } from './whoiswho-routing.module';
import { WhoiswhoComponent } from './whoiswho.component';


@NgModule({
  declarations: [
    WhoiswhoComponent
  ],
  imports: [
    CommonModule,
    WhoiswhoRoutingModule
  ]
})
export class WhoiswhoModule { }
