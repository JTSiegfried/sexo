import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArqPage } from './arq.page';

const routes: Routes = [
  {
    path: '',
    component: ArqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArqPageRoutingModule {}
