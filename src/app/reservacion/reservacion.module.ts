import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservacionPageRoutingModule } from './reservacion-routing.module';

import { ReservacionPage } from './reservacion.page';
import { DatePickerModule } from 'ionic4-date-picker';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePickerModule,
    ReservacionPageRoutingModule
  ],
  declarations: [ReservacionPage]
})
export class ReservacionPageModule {}
