import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuspensionsManagementRoutingModule } from './suspensions-management-routing.module';
import { SuspensionsManagementComponent } from './suspensions-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';


@NgModule({
  declarations: [SuspensionsManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    SuspensionsManagementRoutingModule
  ]
})
export class SuspensionsManagementModule { }
