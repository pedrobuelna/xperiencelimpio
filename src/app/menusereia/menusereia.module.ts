import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusereiaPageRoutingModule } from './menusereia-routing.module';

import { MenusereiaPage } from './menusereia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusereiaPageRoutingModule
  ],
  declarations: [MenusereiaPage]
})
export class MenusereiaPageModule {}
