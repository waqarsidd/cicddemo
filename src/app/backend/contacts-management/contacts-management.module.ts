import { NgModule } from '@angular/core';
import { ContactsManagementRoutingModule } from './contacts-management-routing.module';
import { ContactsManagementComponent } from './contacts-management.component';
import { ContactComponent } from '../components/contact/contact.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [ContactsManagementComponent, ContactComponent],
  imports: [
    ContactsManagementRoutingModule,
    SharedModule,
    PrimengComponentsModule,
  ],
})
export class ContactsManagementModule {}
