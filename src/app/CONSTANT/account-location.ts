import { ITabFormField } from '@app/models/tabFormField';

export const ACCOUNT_LOCATION_FIELDS: Array<ITabFormField> = [
  {
    label: 'Contact Information',
    fields: [
      {
        field: 'main_phone_number',
        label: 'Main phone number',
        type: 'text',
        read: true,
      },
      {
        field: 'main_fax',
        label: 'Main fax',
        type: 'text',
        read: true,
      },
      {
        field: 'primary_email',
        label: 'Primary email',
        type: 'text',
        read: true,
      },
      {
        field: 'primary_contact_name',
        label: 'Primary Contact Name',
        type: 'text',
        read: true,
      },
      {
        field: 'primary_contact_direct_number',
        label: 'Primary Contact Direct Number',
        type: 'text',
        read: true,
      },
      {
        field: 'primary_contact_email',
        label: 'Primary Contact Email',
        type: 'text',
        read: true,
      },
    ],
  },
  {
    label: 'Address Information',
    fields: [
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
        field: 'state',
        label: 'State/province',
        type: 'text',
        read: true,
      },
      {
        field: 'zip',
        label: 'ZIP/Postal Code',
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
        field: 'state',
        label: 'State/province',
        type: 'text',
        read: true,
      },
      {
        field: 'zip',
        label: 'ZIP/Postal Code',
        type: 'text',
        read: true,
      },
      {
        field: 'latitude',
        label: 'Latitude',
        type: 'text',
        read: true,
      },
      {
        field: 'longitude',
        label: 'Longitude',
        type: 'text',
        read: true,
      },
      {
        field: 'Url',
        label: 'URL',
        type: 'text',
        read: true,
      },
      {
        field: 'profile_url',
        label: 'Profile Url',
        type: 'text',
        read: true,
      },
    ],
  },
  {
    label: 'Location Information',
    fields: [
      {
        field: 'claims_eligibility',
        label: 'Claims eligibility',
        type: 'text',
        read: true,
      },
      {
        field: 'additional_location_information',
        label: 'Additional location information',
        type: 'text',
        read: true,
      },
      {
        field: 'association',
        label: 'Association',
        type: 'text',
        read: true,
      },
      {
        field: 'DPSID',
        label: 'DPSID',
        type: 'text',
        read: true,
      },
      {
        field: 'participating_program',
        label: 'Participating program',
        type: 'text',
        read: true,
      },
      {
        field: 'chapter',
        label: 'Chapter',
        type: 'text',
        read: true,
      },
      {
        field: 'primary_location ',
        label: 'Primary Location ',
        type: 'text',
        read: true,
      },
      {
        field: 'availability',
        label: 'Availability',
        type: 'text',
        read: true,
      },
    ],
  },
];
