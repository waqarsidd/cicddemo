import { IFormField } from '../models/formField';
export const CONTACT_FIELDS: Array<IFormField> = [
  { field: 'id', label: 'ID', type: 'text', filter: true },
  {
    field: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    create: true,
    filter: true,
    read: true
  },
  {
    field: 'business_phone',
    label: 'Business Phone',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true

  },
  {
    field: 'mobile_phone',
    label: 'Mobile Phone',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true

  },
  {
    field: 'home_phone',
    label: 'Home Phone',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true

  },
  {
    field: 'fax_number',
    label: 'Fax Number',
    type: 'text',
    filter: true,
    read: true

  },
  {
    field: 'deleted_at',
    label: 'Deleted At',
    type: 'text',
    filter: true,
  },
];
