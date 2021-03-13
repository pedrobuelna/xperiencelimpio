import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuconciergePageRoutingModule } from './menuconcierge-routing.module';

import { MenuconciergePage } from './menuconcierge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuconciergePageRoutingModule
  ],
  declarations: [MenuconciergePage]
})
export class MenuconciergePageModule {}
