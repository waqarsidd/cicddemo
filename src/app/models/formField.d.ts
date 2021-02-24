import { IUserType } from './userType.d';
export interface IFormField {
  field: string;
  label: string;
  type:
    | 'radio'
    | 'date'
    | 'numeric'
    | 'text'
    | 'number'
    | 'dropdown'
    | 'password'
    | 'email'
    | 'textarea'
    | 'checkbox';
  required?: boolean;
  multiple?: boolean;
  allowUserAccess?: Array<IUserType>;
  filter?: boolean;
  groupLabel?: string;
  create_label?: string;
  create_type?:
    | 'radio'
    | 'date'
    | 'text'
    | 'number'
    | 'dropdown'
    | 'password'
    | 'email'
    | 'textarea'
    | 'checkbox';
  options?: Array<{ value: string; label: string; disabled?: boolean }>;
  endPoint?: string;
  isReqPending?: boolean;
  errors?: Array<string>;
  disabled?: boolean;
  hide?: boolean;
  images?: Array<any>;
  create?: boolean;
  read?: boolean;
  icon?: string;
}
