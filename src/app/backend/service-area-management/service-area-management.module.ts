import { NgModule } from '@angular/core';
import { ServiceAreaManagementRoutingModule } from './service-area-management-routing.module';
import { ServiceAreaManagementComponent } from './service-area-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [ServiceAreaManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    ServiceAreaManagementRoutingModule,
  ],
})
export class ServiceAreaManagementModule {}
