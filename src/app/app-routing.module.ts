import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendLayoutComponent } from './backend/layout/backend-layout.component';
import { FrontendLayoutComponent } from './frontend/layout/frontend-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: BackendLayoutComponent,
    loadChildren: () =>
      import('./backend/backend.module').then((m) => m.BackendModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: FrontendLayoutComponent,
    loadChildren: () =>
      import('./frontend/frontend.module').then((m) => m.FrontendModule),
    canActivate: [NonAuthGuard],
  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
