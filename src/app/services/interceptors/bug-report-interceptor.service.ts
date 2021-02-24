import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { InterceptorHelperService } from '../interceptor-helper.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BugReportInterceptorService implements HttpInterceptor {
  constructor(private interceptorHelperService: InterceptorHelperService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 501) {
          this.interceptorHelperService.confirmBugReportDialog(
            error.message,
            req.url
          );
        }
        return throwError(error);
      })
    );
  }
}
