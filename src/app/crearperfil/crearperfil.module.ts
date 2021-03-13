import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearperfilPageRoutingModule } from './crearperfil-routing.module';

import { CrearperfilPage } from './crearperfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearperfilPageRoutingModule
  ],
  declarations: [CrearperfilPage]
})
export class CrearperfilPageModule {}
