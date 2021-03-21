import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosreservacionPageRoutingModule } from './datosreservacion-routing.module';

import { DatosreservacionPage } from './datosreservacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DatosreservacionPageRoutingModule
  ],
  declarations: [DatosreservacionPage]
})
export class DatosreservacionPageModule {}
