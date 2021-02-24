import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProviderComponent } from './add-provider.component';

const routes: Routes = [{ path: '', component: AddProviderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddProviderRoutingModule {}
