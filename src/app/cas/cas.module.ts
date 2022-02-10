import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasPageRoutingModule } from './cas-routing.module';

import { CasPage } from './cas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasPageRoutingModule
  ],
  declarations: [CasPage]
})
export class CasPageModule {}
