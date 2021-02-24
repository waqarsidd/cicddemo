import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { NgModule } from '@angular/core';
import { ServicesManagementRoutingModule } from './services-management-routing.module';
import { ServicesManagementComponent } from './services-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [ServicesManagementComponent, ServiceComponent],
  imports: [
    ServicesManagementRoutingModule,
    SharedModule,
    PrimengComponentsModule,
  ],
})
export class ServicesManagementModule {}
