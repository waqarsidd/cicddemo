import { AccountLocationComponent } from './account-location/account-location.component';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { SharedModule } from '@app/shared-modules/shared.module';
import { NgModule } from '@angular/core';
import { ViewAccountRoutingModule } from './view-account-routing.module';
import { ViewAccountComponent } from './view-account.component';
import { AccountJobsComponent } from './account-jobs/account-jobs.component';
import { AccountServiceAreaComponent } from './account-service-area/account-service-area.component';
import { AccountContactsComponent } from './account-contacts/account-contacts.component';
import { AccountSuspensionsComponent } from './account-suspensions/account-suspensions.component';

@NgModule({
  declarations: [
    ViewAccountComponent,
    AccountJobsComponent,
    AccountServiceAreaComponent,
    AccountContactsComponent,
    AccountLocationComponent,
    AccountSuspensionsComponent,
  ],
  imports: [ViewAccountRoutingModule, SharedModule, PrimengComponentsModule],
})
export class ViewAccountModule {}
