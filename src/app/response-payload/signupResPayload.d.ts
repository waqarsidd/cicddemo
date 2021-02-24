import { IGenericResPayload } from './genericResPayload';

export interface ISignupResPayload extends IGenericResPayload {
  errors?: {
    [key: string]: Array<string>;
  };
}
