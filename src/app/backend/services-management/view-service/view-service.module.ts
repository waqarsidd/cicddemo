import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { SharedModule } from '@app/shared-modules/shared.module';
import { NgModule } from '@angular/core';
import { ViewServiceRoutingModule } from './view-service-routing.module';
import { ViewServiceComponent } from './view-service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ServiceActivityComponent } from './service-activity/service-activity.component';
import { ServiceJobsComponent } from './service-jobs/service-jobs.component';

@NgModule({
  declarations: [
    ViewServiceComponent,
    ServiceDetailsComponent,
    ServiceActivityComponent,
    ServiceJobsComponent
  ],
  imports: [ViewServiceRoutingModule, SharedModule, PrimengComponentsModule],
})
export class ViewServiceModule {}
