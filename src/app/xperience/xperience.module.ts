import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XperiencePageRoutingModule } from './xperience-routing.module';

import { XperiencePage } from './xperience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XperiencePageRoutingModule
  ],
  declarations: [XperiencePage]
})
export class XperiencePageModule {}
