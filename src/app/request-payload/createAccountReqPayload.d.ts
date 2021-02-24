import { IUserType } from '@app/models/userType';

export interface ICreateAccountReqPayload {
  id?: string;
  name: string;
  type: IUserType;
  primary_phone: string;
}
