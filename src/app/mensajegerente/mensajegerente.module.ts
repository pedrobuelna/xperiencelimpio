import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajegerentePageRoutingModule } from './mensajegerente-routing.module';

import { MensajegerentePage } from './mensajegerente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MensajegerentePageRoutingModule
  ],
  declarations: [MensajegerentePage]
})
export class MensajegerentePageModule {}
