import { IFormField } from './formField';

export interface ITabFormField {
  label: string;
  fields: Array<IFormField>;
  enabled?: boolean;
}
