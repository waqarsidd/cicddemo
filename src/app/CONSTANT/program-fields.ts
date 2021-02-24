import { IFormField } from '@app/models/formField';

export const PROGRAM_FIELDS: Array<IFormField> = [
  { field: 'id', label: 'ID', type: 'text' },

  {
    field: 'program_name',
    label: 'Program Name',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },

  {
    field: 'type',
    label: 'Type',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },

  {
    field: 'division',
    label: 'Division',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },

  {
    field: 'category',
    label: 'Category',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },

  {
    field: 'status',
    label: 'Status',
    type: 'text',
    required: true,
    create: true,
    filter: true,
    read: true,
  },

  {
    field: 'last_updated_date',
    label: 'Last Updated Date',
    type: 'date',
    read: true,
  },

  {
    field: 'program_requirements',
    label: 'Program Requirements',
    type: 'text',
    read: true,
  },

  {
    field: 'options',
    label: 'Options',
    type: 'text',
  },
];
