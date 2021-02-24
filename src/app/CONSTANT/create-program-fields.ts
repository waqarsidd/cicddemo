import { IFormField } from '@app/models/formField';

export const CREATE_PROGRAM_FIELDS: Array<IFormField> = [
  { field: 'id', label: 'ID', type: 'text' },

  {
    field: 'program_name',
    label: 'Program Name',
    type: 'text',
    required: true,
    create: true,
  },

  {
    field: 'type',
    label: 'Type',
    type: 'text',
    required: true,
    create: true,
  },

  {
    field: 'national_account_director',
    label: 'National Account Director',
    type: 'dropdown',
    options: [{ label: 'Admin, Encore', value: 'admin' }],
    required: true,
    create: true,
  },

  {
    field: 'program_type',
    label: 'Program Type',
    type: 'dropdown',
    options: [{ label: 'ONCORE', value: 'oncore' }],
    required: true,
    create: true,
  },

  {
    field: 'status',
    label: 'Status',
    type: 'dropdown',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'InActive', value: 'inactive' },
    ],
    required: true,
    create: true,
  },

  {
    field: 'priority',
    label: 'Priority',
    type: 'dropdown',
    options: [
      { label: 'High', value: 'high' },
      { label: 'Medium', value: 'medium' },
      { label: 'Low', value: 'low' },
    ],
    required: true,
    create: true,
  },

  {
    field: 'driect_pay',
    label: 'Direct Pay',
    type: 'radio',
    options: [
      { label: 'Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
    required: true,
    create: true,
  },

  {
    field: 'effective_date',
    label: 'Effective Date',
    type: 'date',
    required: true,
    create: true,
  },

  {
    field: 'dispatch_method',
    label: 'Dispatch Method',
    type: 'radio',
    options: [
      { label: 'Default Method', value: 'default' },
      { label: 'Select Manual Method', value: 'manual' },
    ],
    required: true,
    create: true,
  },

  {
    field: 'select_dispatch_method',
    label: 'Select Dispatch Method',
    type: 'dropdown',
    hide: true,
    options: [{ label: '', value: '' }],
    create: true,
  },

  {
    field: 'report_for_client_connect',
    label: 'Show DryTrack Report for Client Connect',
    type: 'checkbox',
    create: true,
  },

  {
    field: 'program_requirements_change',
    label: 'Allow program requirements to change after dispatch',
    type: 'checkbox',
    create: true,
  },

  {
    field: 'update_method',
    label: 'Update Standards',
    type: 'radio',
    options: [
      { label: 'Set Note Frequency', value: 'note_frequency' },
      { label: 'None', value: 'none' },
    ],
    required: true,
    create: true,
  },

  {
    field: 'type',
    label: 'Required Job Status Update Every day(s).',
    type: 'number',
    required: true,
    create: true,
  },
  {
    field: 'type',
    label:
      'Jobs Pending Payment require a Job Status Update Every day(s) until Payment is Received.',
    type: 'number',
    required: true,
    create: true,
  },
  {
    field: 'description',
    label: 'Description',
    type: 'textarea',
    create: true,
  },
  {
    field: 'program_highlights',
    label: 'Program Highlights',
    type: 'textarea',
    create: true,
  },
  {
    field: 'MICA',
    label: 'MICA',
    type: 'checkbox',
    create: true,
    groupLabel: '3rd Party Services Required',
  },
  {
    field: 'state',
    label: 'Applies To State(s)',
    type: 'text',
    create: true,
  },
  {
    groupLabel: 'Applies To Category',
    field: 'CAT',
    label: 'CAT',
    type: 'checkbox',
    create: true,
  },
  {
    field: 'commercial',
    label: 'Commercial',
    type: 'checkbox',
    create: true,
  },
  {
    field: 'residential',
    label: 'Residential',
    type: 'checkbox',
    create: true,
  },
];
