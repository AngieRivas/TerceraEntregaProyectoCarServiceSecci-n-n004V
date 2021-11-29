import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaragendamientoPage } from './listaragendamiento.page';

const routes: Routes = [
  {
    path: '',
    component: ListaragendamientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaragendamientoPageRoutingModule {}
