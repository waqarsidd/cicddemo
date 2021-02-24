import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountsManagementComponent } from './accounts-management.component';

const routes: Routes = [
  { path: '', component: AccountsManagementComponent },
  { path: 'create', component: AccountComponent },
  { path: ':id', component: AccountComponent },
  {
    path: 'view/:id',
    loadChildren: () =>
      import('./view-account/view-account.module').then(
        (m) => m.ViewAccountModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsManagementRoutingModule {}
