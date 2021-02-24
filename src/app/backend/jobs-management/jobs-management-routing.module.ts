import { JobComponent } from './../components/job/job.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsManagementComponent } from './jobs-management.component';

const routes: Routes = [
  { path: '', component: JobsManagementComponent },
  { path: 'create', component: JobComponent },
  { path: ':id', component: JobComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsManagementRoutingModule {}
