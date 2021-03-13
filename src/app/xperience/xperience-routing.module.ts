import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XperiencePage } from './xperience.page';

const routes: Routes = [
  {
    path: '',
    component: XperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XperiencePageRoutingModule {}
