import { IFormField } from '../models/formField';
export const SERVICE_ACTIVITY: Array<IFormField> = [
  {
    field: 'subject',
    label: 'Subject',
    type: 'text',
    read: true,
  },
  {
    field: 'object',
    label: 'Object',
    type: 'text',
    read: true,
  },
  {
    field: 'description',
    label: 'Description',
    type: 'text',
    read: true,
  },
  {
    field: 'action',
    label: 'Action',
    type: 'text',
    read: true,
  },
];
