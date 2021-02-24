import { SuspensionComponent } from './components/suspension/suspension.component';
import { BillingComponent } from './components/billing/billing.component';
import { JobComponent } from './components/job/job.component';
import { ReportComponent } from './components/report/report.component';
import { ProgramComponent } from './components/program/program.component';
import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { BackendRoutingModule } from './backend-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackendLayoutComponent } from './layout/backend-layout.component';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClaimComponent } from './claim/claim.component';
import { SharedModule } from '../shared-modules/shared.module';
import { BaselineComponent } from './baseline/baseline.component';
import { RoleComponent } from './role/role.component';
import { ClaimCallerInformationComponent } from './claim/claim-caller-information/claim-caller-information.component';
import { ClaimClientInformationComponent } from './claim/claim-client-information/claim-client-information.component';
import { ClaimCustomerInformationComponent } from './claim/claim-customer-information/claim-customer-information.component';
import { ClaimJobAddressInformationComponent } from './claim/claim-job-address-information/claim-job-address-information.component';
import { ClaimInsuranceInformationComponent } from './claim/claim-insurance-information/claim-insurance-information.component';
import { ClaimLossAndPolicyInformationComponent } from './claim/claim-loss-and-policy-information/claim-loss-and-policy-information.component';
import { ClaimPolicyInformationComponent } from './claim/claim-policy-information/claim-policy-information.component';
import { ClaimRequiredServicesComponent } from './claim/claim-required-services/claim-required-services.component';
import { ClaimPaymentServicesComponent } from './claim/claim-payment-services/claim-payment-services.component';
import { ClaimLossDescriptionAndSpeicalInstructionsComponent } from './claim/claim-loss-description-and-speical-instructions/claim-loss-description-and-speical-instructions.component';
import { PrimengComponentsModule } from '@app/shared-modules/primeng-components.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    BackendLayoutComponent,
    SidebarComponent,
    ClaimComponent,
    RolesManagementComponent,
    SidebarComponent,
    BaselineComponent,
    RoleComponent,
    ClaimCallerInformationComponent,
    ClaimClientInformationComponent,
    ClaimCustomerInformationComponent,
    ClaimJobAddressInformationComponent,
    ClaimInsuranceInformationComponent,
    ClaimLossAndPolicyInformationComponent,
    ClaimPolicyInformationComponent,
    ClaimRequiredServicesComponent,
    ClaimPaymentServicesComponent,
    ClaimLossDescriptionAndSpeicalInstructionsComponent,
    UserComponent,
    ProgramComponent,
    ReportComponent,
    JobComponent,
    BillingComponent,
    SuspensionComponent,
    // ServiceJobsComponent,
  ],
  imports: [SharedModule, BackendRoutingModule, PrimengComponentsModule],
})
export class BackendModule {}
