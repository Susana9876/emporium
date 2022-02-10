import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AzPage } from './az.page';

const routes: Routes = [
  {
    path: '',
    component: AzPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AzPageRoutingModule {}
