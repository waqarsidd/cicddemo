import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LOCAL_STORAGE_CONSTANTS } from '@app/CONSTANT/constants';
import { ISignupReqPayload } from '@app/request-payload/signupReqPayload';
import { ILoginResPayload } from '@app/response-payload/loginResPayload';
import { ISignupResPayload } from '@app/response-payload/signupResPayload';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { EndpointService } from './endpoint.service';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedInUser: BehaviorSubject<ILoginResPayload> = new BehaviorSubject(
    this.helperService.getDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.LOGGED_IN_USER
    )
  );

  constructor(
    private endpointService: EndpointService,
    private helperService: HelperService,
    private router: Router
  ) {}

  public register(
    credentials: ISignupReqPayload
  ): Observable<ISignupResPayload> {
    return this.endpointService.register(credentials);
  }

  public login(user: {
    email: string;
    password: string;
  }): Observable<ILoginResPayload> {
    return this.endpointService.login(user).pipe(
      switchMap(async (res: ILoginResPayload) => {
        if (res.token) {
          localStorage.setItem(
            LOCAL_STORAGE_CONSTANTS.TOKEN,
            JSON.stringify(res.token)
          );
          localStorage.setItem(
            LOCAL_STORAGE_CONSTANTS.LOGGED_IN_USER,
            JSON.stringify(res)
          );
          this.loggedInUser.next(res);
          return res;
        } else {
          return null;
        }
      })
    );
  }

  public logout() {
    this.helperService.setDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.TOKEN,
      null
    );
    this.helperService.setDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.LOGGED_IN_USER,
      null
    );
    this.router.navigate(['/login']);
  }

  public hasToken(): boolean {
    const token = this.helperService.getDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.TOKEN
    );
    return !!token;
  }

  public refreshToken(): Observable<string> {
    return this.endpointService.refreshToken().pipe(
      map(
        ({ access_token }) => {
          if (access_token) {
            const newToken = access_token;
            this.helperService.setDataOnLocalStorage(
              LOCAL_STORAGE_CONSTANTS.TOKEN,
              access_token
            );
            // this.storage.set(LOCAL_STORAGE_CONSTANTS.TOKEN, newToken);
            return newToken;
          } else {
            console.log('The Token Black Listed');
            this.logout();
          }
        },
        (err) => {}
      )
    );
  }
}
