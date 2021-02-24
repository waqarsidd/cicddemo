import { IFormField } from './../models/formField.d';

export const ACCOUNT_SUSPENSION_FIELDS: Array<IFormField> = [
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
    field: 'francisee',
    label: 'Francisee Name',
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
    label: 'State/Province',
    type: 'text',
    read: true,
  },
  {
    field: 'zip',
    label: 'Zip/Postal code',
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
