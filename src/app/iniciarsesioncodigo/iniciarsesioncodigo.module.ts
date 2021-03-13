import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarsesioncodigoPageRoutingModule } from './iniciarsesioncodigo-routing.module';

import { IniciarsesioncodigoPage } from './iniciarsesioncodigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IniciarsesioncodigoPageRoutingModule
  ],
  declarations: [IniciarsesioncodigoPage]
})
export class IniciarsesioncodigoPageModule {}
