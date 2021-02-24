import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewServiceAreaComponent } from './view-service-area.component';

const routes: Routes = [{ path: '', component: ViewServiceAreaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewServiceAreaRoutingModule {}
