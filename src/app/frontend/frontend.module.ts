// Global Modules
import { NgModule } from '@angular/core';

// Custom Module
import { FrontendRoutingModule } from './frontend-routing.module';

// Prime Modules

// Components
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontendLayoutComponent } from './layout/frontend-layout.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { SharedModule } from '../shared-modules/shared.module';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';
import { PrivacyPolicyComponent } from '@app/backend/components/privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from '@app/backend/components/terms-of-services/terms-of-services.component';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    FrontendLayoutComponent,
    TwoFactorAuthComponent,
    PrivacyPolicyComponent,
    TermsOfServicesComponent,
  ],
  imports: [SharedModule, FrontendRoutingModule, PrimengComponentsModule],
})
export class FrontendModule {}
