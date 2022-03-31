import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnlaPage } from './enla.page';

const routes: Routes = [
  {
    path: '',
    component: EnlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnlaPageRoutingModule {}
