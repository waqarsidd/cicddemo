import { IUserType } from '@app/models/userType';

export interface ILoginResPayload {
  token: string;
  // token_type: string;
  // expires_in: number;
  user: {
    id: string;
    type?: IUserType;
    name: string;
    email: string;
    email_verified_at: string;
    created_at: string;
    deleted_at: string;
    updated_at: string;
    pincode: string;
    status: string;
    Authorization: {
      roles: Array<any>;
      permissions: {
        action: Array<any>;
      };
    };
  };
}
