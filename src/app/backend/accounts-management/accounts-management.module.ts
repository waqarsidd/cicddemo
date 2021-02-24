import { NgModule } from '@angular/core';
import { AccountsManagementRoutingModule } from './accounts-management-routing.module';
import { AccountsManagementComponent } from './accounts-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { AccountComponent } from './account/account.component';

@NgModule({
  declarations: [
    AccountsManagementComponent,
    AccountComponent,
  ],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    AccountsManagementRoutingModule,
  ],
})
export class AccountsManagementModule {}
