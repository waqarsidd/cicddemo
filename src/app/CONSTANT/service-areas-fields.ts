import { IFormField } from '../models/formField';

export const SERVICE_AREAS_FIELDS: Array<IFormField> = [
  {
    field: 'id',
    label: 'Id',
    type: 'text',
    read: true,
  },
  {
    field: 'provider',
    label: 'Provider',
    type: 'text',
    read: true,
    create: true,
  },
  {
    field: 'type',
    label: 'Type',
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
    field: 'status',
    label: 'Status',
    type: 'text',
    read: true,
  },
];
