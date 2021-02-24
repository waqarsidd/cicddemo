import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { SharedModule } from './shared-modules/shared.module';
import { PrimengComponentsModule } from './shared-modules/primeng-components.module';
import { AddNewCompanyComponent } from './dialog/add-new-company/add-new-company.component';
import { interceptorProviders } from './services/interceptors/interceptorProviders';
import { JwtModule } from '@auth0/angular-jwt';
import { BugReportComponent } from './dialog/bug-report/bug-report.component';
import { DialogService } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AddNewCompanyComponent, BugReportComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmDialogModule,
    PrimengComponentsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        // allowedDomains: ['example.com'],
        // disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
  ],
  providers: [
    MessageService,
    ConfirmationService,
    interceptorProviders,
    DialogService,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
