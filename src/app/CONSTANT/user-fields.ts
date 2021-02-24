import { IFormField } from '../models/formField';
export const USER_FIELDS: Array<IFormField> = [
  { field: 'id', label: 'ID', type: 'text', filter: true },
  {
    field: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },
  {
    field: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    create: true,
    filter: true,
    read: true,
  },
  {
    field: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    create: true,
  },
  {
    field: 'email_verified_at',
    label: 'Email Verified At',
    type: 'email',
    filter: true,
    read: true,
  },
  {
    field: 'pincode',
    label: 'Pincode',
    type: 'password',
    create: true,
  },
  {
    field: 'status',
    label: 'status',
    type: 'text',
    read: true,
    create: true,
  },
  {
    field: 'deleted_at',
    label: 'Deleted At',
    type: 'text',
  },
];
