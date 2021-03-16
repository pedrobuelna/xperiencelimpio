import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingquickfitPageRoutingModule } from './landingquickfit-routing.module';

import { LandingquickfitPage } from './landingquickfit.page';
import { DatePickerModule } from 'ionic4-date-picker';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatePickerModule,
    LandingquickfitPageRoutingModule
  ],
  declarations: [LandingquickfitPage]
})
export class LandingquickfitPageModule {}
