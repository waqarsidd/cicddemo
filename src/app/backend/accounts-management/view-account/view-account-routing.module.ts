import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAccountComponent } from './view-account.component';

const routes: Routes = [{ path: '', component: ViewAccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAccountRoutingModule { }
