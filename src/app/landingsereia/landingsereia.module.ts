import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandingsereiaPageRoutingModule } from './landingsereia-routing.module';

import { LandingsereiaPage } from './landingsereia.page';
import { DatePickerModule } from 'ionic4-date-picker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,DatePickerModule,
    LandingsereiaPageRoutingModule
  ],
  declarations: [LandingsereiaPage]
})
export class LandingsereiaPageModule {}
