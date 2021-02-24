import { ITabFormField } from '@app/models/tabFormField';
export const SERVICE_DETAILS: Array<ITabFormField> = [
  {
    label: 'Claim Information',
    fields: [
      {
        field: 'encore',
        label: 'Encore',
        type: 'number',
        read: true,
      },
      {
        field: 'claim_number',
        label: 'Claim Number',
        type: 'text',
        read: true,
      },
      {
        field: 'referred_by',
        label: 'Referred By',
        type: 'text',
        read: true,
      },
      {
        field: 'cat_reference_no',
        label: 'CAT Reference #',
        type: 'text',
        read: true,
      },
      {
        field: 'type_of_loss',
        label: 'Type of Loss',
        type: 'text',
        read: true,
      },
      {
        field: 'date_of_loss',
        label: 'Date of Loss',
        type: 'date',
        read: true,
      },
      {
        field: 'loss_category',
        label: 'Loss Category',
        type: 'text',
        read: true,
      },
      {
        field: 'caller_information',
        label: 'Caller Information',
        type: 'text',
        read: true,
      },
      {
        field: 'reported_by',
        label: 'Reported By',
        type: 'text',
        read: true,
      },
      {
        field: 'claim_entered_by',
        label: 'Claim Entered By',
        type: 'text',
        read: true,
      },
      {
        field: 'preferred_provider',
        label: 'Preferred Provider',
        type: 'text',
        read: true,
      },
    ],
  },
  {
    label: 'Customer Information',
    fields: [
      {
        field: 'customer_name',
        label: 'Customer Name',
        type: 'text',
        read: true,
      },
      {
        field: 'main_contact_number',
        label: 'Main Contact Number',
        type: 'text',
        read: true,
      },
      {
        field: 'first_notice_of_loss',
        label: 'First Notice Of Loss',
        type: 'text',
        read: true,
      },
      {
        field: 'job_address',
        label: 'Job address',
        type: 'text',
        read: true,
      },
      {
        field: 'home_number',
        label: 'Home number',
        type: 'text',
        read: true,
      },
      {
        field: 'billing_address',
        label: 'Billing address',
        type: 'text',
        read: true,
      },
      {
        field: 'business_number',
        label: 'Business Number',
        type: 'text',
        read: true,
      },
      {
        field: 'other_number',
        label: 'Other Number',
        type: 'text',
        read: true,
      },
      {
        field: 'mobile_number',
        label: 'Mobile number',
        type: 'text',
        read: true,
      },
      {
        field: 'customer_email_address',
        label: 'Customer Email Address',
        type: 'text',
        read: true,
      },
    ],
  },
];
