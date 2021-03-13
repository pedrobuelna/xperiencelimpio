import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarsesionencontrarreservacionPageRoutingModule } from './iniciarsesionencontrarreservacion-routing.module';

import { IniciarsesionencontrarreservacionPage } from './iniciarsesionencontrarreservacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarsesionencontrarreservacionPageRoutingModule
  ],
  declarations: [IniciarsesionencontrarreservacionPage]
})
export class IniciarsesionencontrarreservacionPageModule {}
