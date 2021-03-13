import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoroomservicePageRoutingModule } from './listadoroomservice-routing.module';

import { ListadoroomservicePage } from './listadoroomservice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoroomservicePageRoutingModule
  ],
  declarations: [ListadoroomservicePage]
})
export class ListadoroomservicePageModule {}
