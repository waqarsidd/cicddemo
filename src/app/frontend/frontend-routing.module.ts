import { PrivacyPolicyComponent } from './../backend/components/privacy-policy/privacy-policy.component';
import { TermsOfServicesComponent } from './../backend/components/terms-of-services/terms-of-services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'two-factor-authentication', component: TwoFactorAuthComponent },
  { path: 'terms-of-services', component: TermsOfServicesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'two-factor-authentication', component: TwoFactorAuthComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendRoutingModule {}
