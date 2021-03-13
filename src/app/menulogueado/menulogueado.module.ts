import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenulogueadoPageRoutingModule } from './menulogueado-routing.module';

import { MenulogueadoPage } from './menulogueado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenulogueadoPageRoutingModule
  ],
  declarations: [MenulogueadoPage]
})
export class MenulogueadoPageModule {}
