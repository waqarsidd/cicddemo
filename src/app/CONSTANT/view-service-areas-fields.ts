import { IFormField } from '../models/formField';

export const VIEW_SERVICE_AREAS_FIELDS: Array<IFormField> = [
  {
    field: 'id',
    label: 'Id',
    type: 'text',
    read: true,
  },
  {
    field: 'zipcode',
    label: 'zipcode',
    type: 'text',
    read: true,
    create: true,
  },
  {
    field: 'city',
    label: 'city',
    type: 'text',
    read: true,
    create: true,
  },
  {
    field: 'country',
    label: 'Country',
    type: 'text',
    read: true,
    create: true,
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
