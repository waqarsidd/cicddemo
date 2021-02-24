import { IFormField } from '../models/formField';
export const ACCOUNT_CONTACTS: Array<IFormField> = [
  {
    field: 'view',
    label: 'View',
    type: 'text',
    read: true,
  },
  {
    field: 'name',
    label: 'Name',
    type: 'text',
    read: true,
  },
  {
    field: 'franchisee_name',
    label: 'Franchisee Name',
    type: 'text',
    read: true,
  },
  {
    field: 'address',
    label: 'Address',
    type: 'text',
    read: true,
  },
  {
    field: 'city',
    label: 'City',
    type: 'text',
    read: true,
  },
  {
    field: 'state',
    label: 'Statte/province',
    type: 'text',
    read: true,
  },
  {
    field: 'zip',
    label: 'ZIP/postal Code',
    type: 'text',
    read: true,
  },
  {
    field: 'country',
    label: 'Country',
    type: 'text',
    read: true,
  },
];
