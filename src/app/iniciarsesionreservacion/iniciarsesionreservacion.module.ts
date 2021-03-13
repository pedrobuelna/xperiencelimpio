import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarsesionreservacionPageRoutingModule } from './iniciarsesionreservacion-routing.module';

import { IniciarsesionreservacionPage } from './iniciarsesionreservacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarsesionreservacionPageRoutingModule
  ],
  declarations: [IniciarsesionreservacionPage]
})
export class IniciarsesionreservacionPageModule {}
