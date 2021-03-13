import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarsesionencontrarreservacionPageRoutingModule } from './iniciarsesionencontrarreservacion-routing.module';

import { IniciarsesionencontrarreservacionPage } from './iniciarsesionencontrarreservacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    IniciarsesionencontrarreservacionPageRoutingModule
  ],
  declarations: [IniciarsesionencontrarreservacionPage]
})
export class IniciarsesionencontrarreservacionPageModule {}
