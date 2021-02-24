import { UserComponent } from './../components/user/user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersManagementComponent } from './users-management.component';

const routes: Routes = [
  { path: '', component: UsersManagementComponent },
  { path: 'create', component: UserComponent },
  { path: ':id', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersManagementRoutingModule {}
