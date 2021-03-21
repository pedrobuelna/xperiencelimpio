import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoliticascancelacionPageRoutingModule } from './politicascancelacion-routing.module';

import { PoliticascancelacionPage } from './politicascancelacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoliticascancelacionPageRoutingModule
  ],
  declarations: [PoliticascancelacionPage]
})
export class PoliticascancelacionPageModule {}
