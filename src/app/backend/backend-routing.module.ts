import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoleComponent } from './role/role.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';

const routes: Routes = [
  { path: 'create-claim', component: ClaimComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'roles',
    children: [
      { path: '', component: RolesManagementComponent },
      { path: ':id', component: RoleComponent },
      { path: '**', component: RolesManagementComponent },
    ],
  },
  {
    path: 'add-provider',
    loadChildren: () =>
      import('./add-provider/add-provider.module').then(
        (m) => m.AddProviderModule
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services-management/services-management.module').then(
        (m) => m.ServicesManagementModule
      ),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./contacts-management/contacts-management.module').then(
        (m) => m.ContactsManagementModule
      ),
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./accounts-management/accounts-management.module').then(
        (m) => m.AccountsManagementModule
      ),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users-management/users-management.module').then(
        (m) => m.UsersManagementModule
      ),
  },
  {
    path: 'programs-management',
    loadChildren: () =>
      import('./programs-management/programs-management.module').then(
        (m) => m.ProgramsManagementModule
      ),
  },
  {
    path: 'service-areas',
    loadChildren: () =>
      import('./service-area-management/service-area-management.module').then(
        (m) => m.ServiceAreaManagementModule
      ),
  },
  {
    path: 'reports-management',
    loadChildren: () =>
      import('./reports-management/reports-management.module').then(
        (m) => m.ReportsManagementModule
      ),
  },
  {
    path: 'jobs-management',
    loadChildren: () =>
      import('./jobs-management/jobs-management.module').then(
        (m) => m.JobsManagementModule
      ),
  },
  {
    path: 'billing-management',
    loadChildren: () =>
      import('./billing-management/billing-management.module').then(
        (m) => m.BillingManagementModule
      ),
  },
  {
    path: 'suspension-management',
    loadChildren: () =>
      import('./suspensions-management/suspensions-management.module').then(
        (m) => m.SuspensionsManagementModule
      ),
  },
  {
    path: 'queue-management',
    loadChildren: () =>
      import('./queue-management/queue-management.module').then(
        (m) => m.QueueManagementModule
      ),
  },

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackendRoutingModule {}
