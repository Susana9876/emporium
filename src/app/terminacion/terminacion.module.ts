import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminacionPageRoutingModule } from './terminacion-routing.module';

import { TerminacionPage } from './terminacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminacionPageRoutingModule
  ],
  declarations: [TerminacionPage]
})
export class TerminacionPageModule {}
