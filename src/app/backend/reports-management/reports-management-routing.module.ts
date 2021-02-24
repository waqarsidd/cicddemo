import { ReportComponent } from './../components/report/report.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsManagementComponent } from './reports-management.component';

const routes: Routes = [
  { path: '', component: ReportsManagementComponent },
  { path: 'create', component: ReportComponent },
  { path: ':id', component: ReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsManagementRoutingModule {}
