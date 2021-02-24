import { ServiceComponent } from './service/service.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesManagementComponent } from './services-management.component';

const routes: Routes = [
  { path: '', component: ServicesManagementComponent },
  { path: 'create', component: ServiceComponent },
  { path: ':id', component: ServiceComponent },
  {
    path: 'view/:id',
    loadChildren: () =>
      import('./view-service/view-service.module').then(
        (m) => m.ViewServiceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesManagementRoutingModule {}
