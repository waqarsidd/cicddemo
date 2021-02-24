import { IFormField } from './../models/formField.d';
export const ACCOUNT_FIELDS: Array<IFormField> = [
  {
    field: 'id',
    label: 'Id',
    type: 'text',
  },
  {
    field: 'name',
    label: 'Name',
    type: 'text',
    required: true,
    create: true,
    read: true,
  },
  {
    field: 'type',
    label: 'Type',
    type: 'dropdown',
    create: true,
    required: true,
    options: [
      { label: 'Customer', value: 'customer' },
      { label: 'Carrier', value: 'carrier' },
      { label: 'Provider', value: 'provider' },
      { label: 'Network', value: 'network' },
    ],
  },
  {
    field: 'location_type',
    label: 'Location Type',
    type: 'text',
    read: true,
  },
  {
    field: 'primary_phone',
    label: 'Phone',
    type: 'text',
    required: true,
    create: true,
    read: true,
  },

  {
    field: 'zip',
    label: 'Zip Code',
    type: 'text',
    required: true,
    // create: true,
    read: true,
  },

  {
    field: 'country',
    label: 'Country',
    type: 'text',
    // required: true,
    // create: true,
    // read: true,
  },
  {
    field: 'state',
    label: 'State',
    type: 'text',
    required: true,
    // create: true,
    // read: true,
  },
  {
    field: 'city',
    label: 'City',
    type: 'text',
    required: true,
    // create: true,
    // read: true,
  },
  {
    field: 'address',
    label: 'Address',
    type: 'text',
    required: true,
    // create: true,
    // read: true,
  },

  {
    field: 'network_id',
    label: 'Network Id',
    type: 'text',
    // read: true,
  },
  {
    field: 'membership_id',
    label: 'Membership Id',
    type: 'text',
    // read: true,
  },
  {
    field: 'deleted_at',
    label: 'Deleted At',
    type: 'text',
  },
];
