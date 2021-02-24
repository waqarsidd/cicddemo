import { ContactComponent } from './../components/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsManagementComponent } from './contacts-management.component';

const routes: Routes = [
  { path: '', component: ContactsManagementComponent },
  { path: 'create', component: ContactComponent },
  { path: ':id', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsManagementRoutingModule {}
