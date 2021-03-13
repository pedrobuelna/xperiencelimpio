import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuquickfitPageRoutingModule } from './menuquickfit-routing.module';

import { MenuquickfitPage } from './menuquickfit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuquickfitPageRoutingModule
  ],
  declarations: [MenuquickfitPage]
})
export class MenuquickfitPageModule {}
