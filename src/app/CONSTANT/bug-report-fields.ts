import { IFormField } from '@app/models/formField';

export const BUG_REPORT_FIELDS: Array<IFormField> = [
  {
    field: 'phone',
    label: 'Pick up a phone and call us',
    required: true,
    type: 'number',
    disabled: true,
  },
  {
    field: 'email',
    label: 'Send an email to us',
    required: true,
    type: 'email',
    disabled: true,
  },
  {
    field: 'issue',
    label: 'Report an issue',
    required: true,
    type: 'textarea',
  },
];
