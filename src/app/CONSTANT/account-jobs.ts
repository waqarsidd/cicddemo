import { IFormField } from '../models/formField';
export const ACCOUNT_JOBS: Array<IFormField> = [
  {
    field: 'job_number',
    label: 'Job',
    type: 'text',
    read: true,
  },
  {
    field: 'client',
    label: 'Client',
    type: 'text',
    read: true,
  },
  {
    field: 'provider_location',
    label: 'Provider location',
    type: 'text',
    read: true,
  },
  {
    field: 'customer',
    label: 'Customer',
    type: 'text',
    read: true,
  },
  {
    field: 'street',
    label: 'Street',
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
    field: 'zip',
    label: 'Zip',
    type: 'text',
    read: true,
  },
  {
    field: 'service',
    label: 'Service',
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
    field: 'status',
    label: 'Status',
    type: 'text',
    read: true,
  },
];
