import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsManagementRoutingModule } from './programs-management-routing.module';
import { ProgramsManagementComponent } from './programs-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';


@NgModule({
  declarations: [ProgramsManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    ProgramsManagementRoutingModule
  ]
})
export class ProgramsManagementModule { }
