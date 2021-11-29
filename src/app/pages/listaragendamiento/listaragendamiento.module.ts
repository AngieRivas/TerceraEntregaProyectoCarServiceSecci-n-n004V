import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaragendamientoPageRoutingModule } from './listaragendamiento-routing.module';

import { ListaragendamientoPage } from './listaragendamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaragendamientoPageRoutingModule
  ],
  declarations: [ListaragendamientoPage]
})
export class ListaragendamientoPageModule {}
