import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsManagementRoutingModule } from './jobs-management-routing.module';
import { JobsManagementComponent } from './jobs-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';


@NgModule({
  declarations: [JobsManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    JobsManagementRoutingModule
  ]
})
export class JobsManagementModule { }
