import { ITabFormField } from '@app/models/tabFormField';

export const APPLY_CONTRACTOR_FOR_ONCORE: Array<ITabFormField> = [
  {
    label: 'Basic Information',
    enabled: true,
    fields: [
      {
        field: 'provider_name',
        label: 'Provider Name',
        required: true,
        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },

      {
        field: 'location_name',
        label: 'Location Name',
        required: true,
        type: 'text',
      },

      {
        field: 'provider_location_type',
        label: 'Provider Location Type',
        required: true,
        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },

      {
        field: 'email',
        label: 'E-Mail',
        required: true,
        type: 'email',
      },

      {
        field: 'website',
        label: 'WebSite',
        required: true,
        type: 'text',
      },

      {
        field: 'is_head_office',
        label: 'Is Head Office',
        type: 'checkbox',
      },

      {
        field: 'dispatch_xactNet_address',
        label: 'Dispatch XactNet Address',
        required: true,
        type: 'text',
      },
      {
        field: 'dispatch_symbility_company_id',
        label: 'Dispatch Symbility Company ID',
        required: true,
        type: 'text',
      },
    ],
  },
  {
    label: 'General Information',
    fields: [
      {
        field: 'business_type',
        label: 'Business Type',
        required: true,
        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'chapter',
        label: 'Chapter',
        required: true,
        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'chapter_committee',
        label: 'Chapter committee',
        required: true,
        type: 'dropdown',

        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'level',
        required: true,
        label: 'Level',

        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'call_center_status',
        label: 'Call Center Status',
        required: true,
        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'status',
        required: true,
        label: 'Status',

        type: 'dropdown',
        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
      {
        field: 'business_development_manager',
        label: 'Business Development Manager',
        required: true,
        type: 'dropdown',

        options: [
          { value: 'test1', label: 'test 1' },
          { value: 'test2', label: 'test 2' },
        ],
      },
    ],
  },
  {
    label: 'Address Information',
    fields: [
      {
        field: 'address',
        label: 'Address',
        required: true,
        type: 'text',
      },
      {
        field: 'zip',
        label: 'ZIP/Postal Code',
        required: true,
        type: 'number',
      },
      {
        field: 'city',
        label: 'City',
        required: true,
        type: 'text',
      },
      {
        field: 'fax',
        label: 'Fax',
        required: true,
        type: 'text',
      },
      {
        field: 'pager',
        label: 'Pager',
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
        field: 'state/province',
        label: 'State/Province',
        required: true,
        type: 'dropdown',
        options: [
          {
            label: 'test 1',
            value: 'test1',
          },
          {
            label: 'test 2',
            value: 'test2',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact Information',
    fields: [
      {
        field: 'emergency_phone_no',
        label: 'Emergency Phone No',
        required: true,
        type: 'number',
      },
      {
        field: 'business_phone_no',
        label: 'Business Phone No',
        required: true,
        type: 'number',
      },
      {
        field: 'home_phone_no',
        label: 'Home Phone No',
        required: true,
        type: 'number',
      },
      {
        field: 'other_phone_no',
        label: 'Other Phone No',
        required: true,
        type: 'number',
      },
      {
        field: 'toll_free_no',
        label: 'Toll Free No',
        required: true,
        type: 'number',
      },
    ],
  },
  {
    label: 'Other Information',
    fields: [
      {
        field: 'notification',
        label: 'Email Notification',
        required: true,
        type: 'radio',
        options: [
          { value: 'admin_ngs', label: 'Admin, NGS' },
          { value: 'admin_temp', label: 'Admin, Temp' },
        ],
      },
    ],
  },
];
