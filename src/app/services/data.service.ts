import { Injectable } from '@angular/core';
import { ICreateAccountReqPayload } from '@app/request-payload/createAccountReqPayload';
import { ICreateClaimReqPayload } from '@app/request-payload/createClaimReqPayload';
import { IGenericResPayload } from '@app/response-payload/genericResPayload';
import { IGetAccountResPayload } from '@app/response-payload/getAccountResPayload';
import { IGetAccountsResPayload } from '@app/response-payload/getAccountsResPayload';
import { IGetClaimResourceResPayload } from '@app/response-payload/getClaimResourceResPayload';
import { IGetCustomerDetailsResPayload } from '@app/response-payload/getCustomerDetailsResPayload';
import { IGetServicesResPayload } from '@app/response-payload/getServicesResPayload';
import { ISignupResPayload } from '@app/response-payload/signupResPayload';
import { Observable } from 'rxjs';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private endpointService: EndpointService) {}

  public getCreateClaimResources(
    endpoint: any
  ): Observable<IGetClaimResourceResPayload> {
    return this.endpointService.getCreateClaimResources(endpoint);
  }

  public getCustomerDetails(
    id: string
  ): Observable<IGetCustomerDetailsResPayload> {
    return this.endpointService.getCustomerDetails(id);
  }

  public getServices(): Observable<Array<IGetServicesResPayload>> {
    return this.endpointService.getServices();
  }

  public getContacts(): Observable<any> {
    return this.endpointService.getContacts();
  }

  public getUsers(): Observable<any> {
    return this.endpointService.getUsers();
  }

  public getAccounts(): Observable<IGetAccountsResPayload> {
    return this.endpointService.getAccounts();
  }

  public getAccount(id: string): Observable<IGetAccountResPayload> {
    return this.endpointService.getAccount(id);
  }

  public updateAccount(data: any): Observable<any> {
    return this.endpointService.updateAccount(data);
  }

  public createAccount(
    data: ICreateAccountReqPayload
  ): Observable<IGenericResPayload> {
    return this.endpointService.createAccount(data);
  }

  public createService(
    reqData: ICreateClaimReqPayload
  ): Observable<IGenericResPayload> {
    return this.endpointService.createService(reqData);
  }

  public getPrograms(): Observable<any> {
    return this.endpointService.getPrograms();
  }
}
