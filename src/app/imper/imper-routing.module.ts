import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImperPage } from './imper.page';

const routes: Routes = [
  {
    path: '',
    component: ImperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImperPageRoutingModule {}
