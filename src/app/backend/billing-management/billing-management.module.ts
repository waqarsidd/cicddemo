import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillingManagementRoutingModule } from './billing-management-routing.module';
import { BillingManagementComponent } from './billing-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [BillingManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    BillingManagementRoutingModule,
  ],
})
export class BillingManagementModule {}
