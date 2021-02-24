import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueueManagementComponent } from './queue-management.component';

const routes: Routes = [
  { path: '', component: QueueManagementComponent },
  { path: 'create', component: QueueManagementComponent },
  { path: ':id', component: QueueManagementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueueManagementRoutingModule {}
