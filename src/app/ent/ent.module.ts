import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntPageRoutingModule } from './ent-routing.module';

import { EntPage } from './ent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntPageRoutingModule
  ],
  declarations: [EntPage]
})
export class EntPageModule {}
