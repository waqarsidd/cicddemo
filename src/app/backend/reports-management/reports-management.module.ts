import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsManagementRoutingModule } from './reports-management-routing.module';
import { ReportsManagementComponent } from './reports-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';


@NgModule({
  declarations: [ReportsManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    ReportsManagementRoutingModule
  ]
})
export class ReportsManagementModule { }
