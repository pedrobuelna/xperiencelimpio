import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminostxtPageRoutingModule } from './terminostxt-routing.module';

import { TerminostxtPage } from './terminostxt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminostxtPageRoutingModule
  ],
  declarations: [TerminostxtPage]
})
export class TerminostxtPageModule {}
