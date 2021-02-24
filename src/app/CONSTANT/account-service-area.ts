import { IFormField } from '../models/formField';
export const ACCOUNT_SERVICE_AREA: Array<IFormField> = [
  {
    field: 'id',
    label: 'id',
    type: 'text',
    read: true,
  },
  {
    field: 'zipcode',
    label: 'Zip Code',
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
    field: 'country',
    label: 'Country',
    type: 'text',
    read: true,
  },
  {
    field: 'state',
    label: 'State',
    type: 'text',
    read: true,
  },
  {
    field: 'status',
    label: 'Status',
    type: 'text',
    read: true,
  },
  {
    field: 'membership',
    label: 'Membership',
    type: 'text',
    read: true,
  },
];
