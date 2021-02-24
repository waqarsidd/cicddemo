import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceAreaManagementComponent } from './service-area-management.component';

const routes: Routes = [
  { path: '', component: ServiceAreaManagementComponent },
  // { path: 'create', component: ServiceAreaComponent },
  {
    path: 'view/:id',
    loadChildren: () =>
      import('./view-service-area/view-service-area.module').then(
        (m) => m.ViewServiceAreaModule
      ),
  },
  // { path: ':id', component: ServiceAreaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceAreaManagementRoutingModule {}
