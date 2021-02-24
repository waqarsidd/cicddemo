import { NgModule } from '@angular/core';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { SharedModule } from '@app/shared-modules/shared.module';
import { AddServiceComponent } from './add-service/add-service.component';
import { ViewServiceAreaRoutingModule } from './view-service-area-routing.module';
import { ViewServiceAreaComponent } from './view-service-area.component';
import { AddZipcodeComponent } from './add-zipcode/add-zipcode.component';

@NgModule({
  declarations: [
    ViewServiceAreaComponent,
    AddServiceComponent,
    AddZipcodeComponent,
  ],
  imports: [
    ViewServiceAreaRoutingModule,
    SharedModule,
    PrimengComponentsModule,
  ],
})
export class ViewServiceAreaModule {}
