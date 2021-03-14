import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoprivacidadPageRoutingModule } from './avisoprivacidad-routing.module';

import { AvisoprivacidadPage } from './avisoprivacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoprivacidadPageRoutingModule
  ],
  declarations: [AvisoprivacidadPage]
})
export class AvisoprivacidadPageModule {}
