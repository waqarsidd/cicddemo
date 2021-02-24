import { NgModule } from '@angular/core';
import { UsersManagementRoutingModule } from './users-management-routing.module';
import { UsersManagementComponent } from './users-management.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [UsersManagementComponent],
  imports: [
    SharedModule,
    PrimengComponentsModule,
    UsersManagementRoutingModule,
  ],
})
export class UsersManagementModule {}
