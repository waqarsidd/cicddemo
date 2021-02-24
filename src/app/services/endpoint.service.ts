import { IGetCustomerDetailsResPayload } from '@app/response-payload/getCustomerDetailsResPayload';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap, map, tap } from 'rxjs/operators';
import { environment } from '@environment';
import { MessageService } from 'primeng/api';
import { ISignupReqPayload } from '@app/request-payload/signupReqPayload';
import { ISignupResPayload } from '@app/response-payload/signupResPayload';
import { ICreateClaimReqPayload } from '@app/request-payload/createClaimReqPayload';
import { IGetClaimResourceResPayload } from '@app/response-payload/getClaimResourceResPayload';
import { ILoginResPayload } from '@app/response-payload/loginResPayload';
import { ICreateAccountReqPayload } from '@app/request-payload/createAccountReqPayload';
import { IGetAccountResPayload } from '@app/response-payload/getAccountResPayload';
import { IGetAccountsResPayload } from '@app/response-payload/getAccountsResPayload';
import { IGenericResPayload } from '@app/response-payload/genericResPayload';
import { IGetServicesResPayload } from '@app/response-payload/getServicesResPayload';

@Injectable({
  providedIn: 'root',
})
export class EndpointService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /* Authentication Endpoint call */
  public login(user: {
    email: string;
    password: string;
  }): Observable<ILoginResPayload | object> {
    return this.http.post(environment.apiUrl + 'login', user).pipe(
      catchError((error) => {
        const {
          error: { error: errorMessage, message },
        } = error;
        this.showToast(message || errorMessage, true);
        return throwError(error);
      })
    );
  }

  public register(
    credentials: ISignupReqPayload
  ): Observable<ISignupResPayload> {
    return this.http
      .post<ISignupResPayload>(environment.apiUrl + 'register', credentials)
      .pipe(
        switchMap(
          (res: ISignupResPayload): Observable<ISignupResPayload> => {
            if (res.success) {
              // this.showToast(res.message);
            }
            return of(res);
          }
        ),
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }

  // // refresh token if exits on API
  public refreshToken(): Observable<any> {
    return this.http
      .post<ISignupResPayload>(environment.apiUrl + 'refresh', {
        observe: 'response',
      })
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }

  public getCreateClaimResources(
    endpoint: any
  ): Observable<IGetClaimResourceResPayload> {
    return this.http
      .get<IGetClaimResourceResPayload>(environment.apiUrl + endpoint)
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }

  public getCustomerDetails(
    id: string
  ): Observable<IGetCustomerDetailsResPayload> {
    return this.http
      .get<IGetCustomerDetailsResPayload>(
        `${environment.apiUrl}customer-detail/${id}`
      )
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }
  public getServices(): Observable<Array<IGetServicesResPayload>> {
    return this.http
      .get<Array<IGetServicesResPayload>>(`${environment.apiUrl}services`)
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }
  public getContacts(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}contacts`).pipe(
      catchError((error) => {
        const {
          error: { error: errorMessage, message },
        } = error;
        this.showToast(message || errorMessage, true);
        return throwError(error);
      })
    );
  }
  public getUsers(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}users`).pipe(
      catchError((error) => {
        const {
          error: { error: errorMessage, message },
        } = error;
        this.showToast(message || errorMessage, true);
        return throwError(error);
      })
    );
  }
  public getAccounts(): Observable<IGetAccountsResPayload> {
    return this.http
      .get<IGetAccountsResPayload>(`${environment.apiUrl}accounts`)
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }
  public getAccount(id: string): Observable<IGetAccountResPayload> {
    return this.http
      .get<IGetAccountResPayload>(`${environment.apiUrl}accounts/${id}`)
      .pipe(
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }
  public updateAccount(data: ICreateAccountReqPayload): Observable<any> {
    return this.http
      .put<any>(`${environment.apiUrl}accounts/${data.id}`, data)
      .pipe(
        tap((_) => {
          this.showToast('Account Updated successfully', false);
        }),
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }
  public createAccount(
    data: ICreateAccountReqPayload
  ): Observable<IGenericResPayload> {
    return this.http
      .post<IGenericResPayload>(`${environment.apiUrl}accounts`, data)
      .pipe(
        tap((_) => {
          this.showToast('Account Created successfully', false);
        }),
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }

  public createService(
    data: ICreateClaimReqPayload
  ): Observable<IGenericResPayload> {
    return this.http
      .post<IGenericResPayload>(`${environment.apiUrl}services`, data)
      .pipe(
        tap((res) => {
          if (!res.success) {
            this.showToast(res.message, true);
          } else {
            this.showToast('Service Created successfully', false);
          }
        }),
        catchError((error) => {
          const {
            error: { error: errorMessage, message },
          } = error;
          this.showToast(message || errorMessage, true);
          return throwError(error);
        })
      );
  }

  public getPrograms(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}programs`).pipe(
      catchError((error) => {
        const {
          error: { error: errorMessage, message },
        } = error;
        this.showToast(message || errorMessage, true);
        return throwError(error);
      })
    );
  }

  private showToast(message: string, hasError: boolean = false) {
    if (hasError) {
      this.messageService.add({
        severity: 'error',
        summary: 'ERROR',
        detail: message,
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'SUCCESS',
        detail: message,
      });
    }
  }
}
