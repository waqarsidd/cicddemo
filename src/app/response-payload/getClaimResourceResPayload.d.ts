import { IGenericResPayload } from './genericResPayload.d';

export interface IGetClaimResourceResPayload extends IGenericResPayload {
  data?: Array<{id: string; name: string}>;
}
