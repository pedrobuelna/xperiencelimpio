import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValetparkingPageRoutingModule } from './valetparking-routing.module';

import { ValetparkingPage } from './valetparking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValetparkingPageRoutingModule
  ],
  declarations: [ValetparkingPage]
})
export class ValetparkingPageModule {}
