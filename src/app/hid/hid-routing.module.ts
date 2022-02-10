import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HidPage } from './hid.page';

const routes: Routes = [
  {
    path: '',
    component: HidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HidPageRoutingModule {}
