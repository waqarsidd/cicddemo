import { IFormField } from '@app/models/formField';

export const ADD_NEW_COMPANY_FIELDS: Array<IFormField> = [
  {
    field: 'company_name',
    label: 'Company Name',
    required: true,
    type: 'text',
  },
  {
    field: 'office_name	',
    label: 'Office Name	',
    required: true,
    type: 'text',
  },
  {
    field: 'address',
    label: 'Address',
    required: true,
    type: 'text',
  },
  {
    field: 'city',
    label: 'City',
    required: true,
    type: 'text',
  },
  {
    field: 'country',
    label: 'Country',
    required: true,
    type: 'text',
  },
  {
    field: 'state',
    label: 'State/Province',
    required: true,
    type: 'text',
  },
  {
    field: 'zip',
    label: 'ZIP Code',
    required: true,
    type: 'text',
  },
  {
    field: 'website',
    label: 'Website',
    required: true,
    type: 'text',
  },
  {
    field: 'phone_type',
    label: 'Phone Type',
    required: true,
    type: 'text',
  },
  {
    field: 'phone',
    label: 'Phone',
    required: true,
    type: 'text',
  },
];
