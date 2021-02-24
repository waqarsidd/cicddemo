import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BugReportInterceptorService } from './bug-report-interceptor.service';
import { MockHttpInterceptorService } from './mock-http-interceptor.service';
import { TokenInterceptorService } from './token-interceptor.service';

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BugReportInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: MockHttpInterceptorService,
    multi: true,
  },
];
