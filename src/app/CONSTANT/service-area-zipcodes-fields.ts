import { IFormField } from '../models/formField';
export const SERVICE_AREA_ZIPCODE_FIELDS: Array<IFormField> = [
  {
    field: 'id',
    label: 'ID',
    type: 'text',
    read: true,
  },
  {
    field: 'zipcode',
    label: 'Zipcode',
    type: 'text',
    read: true,
    filter: true,
  },
  {
    field: 'city',
    label: 'City',
    type: 'text',
    read: true,
    filter: true,
  },
  {
    field: 'country',
    label: 'Country',
    type: 'text',
    read: true,
    filter: true,
  },
  {
    field: 'state',
    label: 'State',
    type: 'text',
    read: true,
    filter: true,
  },
  {
    field: 'status',
    label: 'Status',
    type: 'text',
    read: true,
    filter: true,
  },
  {
    field: 'membership',
    label: 'Membership',
    type: 'text',
    read: true,
    filter: true,
  },
];
