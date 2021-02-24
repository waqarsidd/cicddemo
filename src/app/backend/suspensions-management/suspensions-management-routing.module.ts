import { SuspensionComponent } from './../components/suspension/suspension.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuspensionsManagementComponent } from './suspensions-management.component';

const routes: Routes = [
  { path: '', component: SuspensionsManagementComponent },
  { path: 'create', component: SuspensionComponent },
  { path: ':id', component: SuspensionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuspensionsManagementRoutingModule {}
