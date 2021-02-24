import { ProgramComponent } from './../components/program/program.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramsManagementComponent } from './programs-management.component';

const routes: Routes = [
  { path: '', component: ProgramsManagementComponent },
  { path: 'create', component: ProgramComponent },
  { path: ':id', component: ProgramComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramsManagementRoutingModule {}
