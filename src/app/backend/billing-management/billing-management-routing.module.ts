import { BillingComponent } from './../components/billing/billing.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingManagementComponent } from './billing-management.component';

const routes: Routes = [
  { path: '', component: BillingManagementComponent },
  { path: 'create', component: BillingComponent },
  { path: ':id', component: BillingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingManagementRoutingModule { }
