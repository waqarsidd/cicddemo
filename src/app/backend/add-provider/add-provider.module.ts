import { NgModule } from '@angular/core';
import { AddProviderRoutingModule } from './add-provider-routing.module';
import { AddProviderComponent } from './add-provider.component';
import { SharedModule } from '@app/shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [AddProviderComponent],
  imports: [AddProviderRoutingModule, SharedModule, PrimengComponentsModule],
})
export class AddProviderModule {}
