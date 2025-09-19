import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdaterPage } from './updater.page';

const routes: Routes = [
  {
    path: '',
    component: UpdaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdaterPageRoutingModule {}
