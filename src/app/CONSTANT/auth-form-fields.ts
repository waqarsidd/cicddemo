import { IFormField } from '../models/formField';

export const SIGNUP_FIELDS: { customer: Array<IFormField> } = {
  customer: [
    {
      field: 'type',
      label: 'Select Type',
      required: true,
      type: 'dropdown',
      options: [
        { value: 'customer', label: 'Customer' },
        { value: 'provider', label: 'Provider' },
        { value: 'adjuster', label: 'Adjuster' },
      ],
    },
    {
      field: 'first_name',
      label: 'First Name',
      required: true,
      type: 'text',
    },
    {
      field: 'last_name',
      label: 'Last Name',
      required: true,
      type: 'text',
    },
    {
      field: 'email',
      label: 'Email',
      required: true,
      type: 'email',
    },
    {
      field: 'password',
      label: 'Password',
      required: true,
      type: 'password',
    },
    {
      field: 'password_confirmation',
      label: 'Password Confirm',
      required: true,
      type: 'password',
    },
    {
      field: 'address',
      label: 'Address',
      required: true,
      type: 'text',
    },
    {
      field: 'primary_phone',
      label: 'Phone',
      required: true,
      type: 'text',
    },
  ],
};
export const SIGNIN_FIELDS: { customer: Array<IFormField> } = {
  customer: [
    {
      field: 'email',
      label: 'Email',
      required: true,
      type: 'email',
    },
    {
      field: 'password',
      label: 'Password',
      required: true,
      type: 'password',
    },
    {
      field: 'remember',
      label: 'Remember me',
      required: false,
      type: 'checkbox',
    },
  ],
};
export const VERIFY_FIELDS: { [key: string]: Array<IFormField> } = {
  customer: [
    {
      field: 'verify',
      label: 'Enter verification code',
      required: true,
      type: 'text',
    },
  ],
};
export const PROFILE_FIELDS: { customer: Array<IFormField> } = {
  customer: [
    {
      field: 'first_name',
      label: 'First Name',
      required: true,
      type: 'text',
    },
    {
      field: 'last_name',
      label: 'Last Name',
      required: true,
      type: 'text',
    },
    {
      field: 'email',
      label: 'Email',
      required: true,
      type: 'email',
      disabled: true,
    },
  ],
};
