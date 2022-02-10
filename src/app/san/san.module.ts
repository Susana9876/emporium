import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SanPageRoutingModule } from './san-routing.module';

import { SanPage } from './san.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SanPageRoutingModule
  ],
  declarations: [SanPage]
})
export class SanPageModule {}
