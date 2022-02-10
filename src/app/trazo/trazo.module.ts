import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrazoPageRoutingModule } from './trazo-routing.module';

import { TrazoPage } from './trazo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrazoPageRoutingModule
  ],
  declarations: [TrazoPage]
})
export class TrazoPageModule {}
