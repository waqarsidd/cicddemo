import { environment } from './../../../environments/environment.stage';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockHttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url } = request;
    return this.handleRoute(request, next);
  }

  private handleRoute(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    const { url, method, body } = request;
    let req;
    switch (true) {
      // case url.endsWith('/services') && method === 'GET':
      //   req = request.clone({ url: `${environment.MOCK_URL}services` });
      //   return next.handle(req);

      case url.endsWith('/contacts') && method === 'GET':
        req = request.clone({ url: `${environment.MOCK_URL}contacts` });
        return next.handle(req);

      // case url.endsWith('/accounts') && method === 'GET':
      //   req = request.clone({ url: `${environment.MOCK_URL}accounts` });
      //   return next.handle(req);

      case url.endsWith('/users') && method === 'GET':
        req = request.clone({ url: `${environment.MOCK_URL}users` });
        return next.handle(req);

      case url.endsWith('/programs') && method === 'GET':
        req = request.clone({ url: `${environment.MOCK_URL}programs` });
        return next.handle(req);

      default:
        return next.handle(request);
    }
  }
}
