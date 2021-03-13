import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciologueadoPageRoutingModule } from './iniciologueado-routing.module';

import { IniciologueadoPage } from './iniciologueado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciologueadoPageRoutingModule
  ],
  declarations: [IniciologueadoPage]
})
export class IniciologueadoPageModule {}
