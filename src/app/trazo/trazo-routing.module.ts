import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrazoPage } from './trazo.page';

const routes: Routes = [
  {
    path: '',
    component: TrazoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrazoPageRoutingModule {}
