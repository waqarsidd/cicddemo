import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueueManagementRoutingModule } from './queue-management-routing.module';
import { QueueManagementComponent } from './queue-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [QueueManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    QueueManagementRoutingModule,
  ],
})
export class QueueManagementModule {}
