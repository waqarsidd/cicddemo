import { ITabFormField } from '@app/models/tabFormField';

export const CREATE_CLAIM_FIELDS: Array<ITabFormField> = [
  {
    label: 'Caller Information',
    fields: [
      {
        label: 'Select a caller',
        field: 'caller',
        endPoint: 'caller',
        type: 'dropdown',
        required: true,
        options: [{ label: '', value: '' }],
      },
      {
        label: 'First Name',
        field: 'first_name',
        type: 'text',
        required: true,
      },
      {
        label: 'Last Name',
        field: 'last_name',
        type: 'text',
        required: true,
      },
      {
        // logged in user email
        label: 'Select Reported By',
        field: 'reported_by',
        // endPoint: 'reported-by',
        type: 'email',
        disabled: true,
        // options: [{ label: '', value: '' }],
        // required: true,
      },
      {
        field: 'referred_by_type',
        label: '',
        required: true,
        type: 'radio',
        options: [
          { value: 'contact', label: 'Referred By Contact' },
          { value: 'provider', label: 'Referred By Provider' },
        ],
      },
      {
        label: 'Select a Referred By Contact',
        field: 'contact',
        endPoint: 'referral?referred_by_type=contact',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Select Provider',
        field: 'provider',
        endPoint: 'referral?referred_by_type=provider',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        hide: true,
        required: false,
      },
    ],
  },
  {
    label: 'Client Information',
    fields: [
      {
        label: 'Select Client',
        field: 'carrier_id',
        type: 'dropdown',
        endPoint: 'carrier',
        options: [{ label: '', value: '' }],
        required: true,
      },
      // {
      //   label: 'Select Location',
      //   field: 'location',
      //   type: 'dropdown',
      //   disabled: true,
      //   endPoint: 'client-location',
      //   options: [{ label: '', value: '' }],
      //   required: true,
      // },
      // {
      //   label: 'Select Client Contact',
      //   field: 'client_contact',
      //   disabled: true,
      //   endPoint: 'client-contact',
      //   type: 'dropdown',
      //   options: [{ label: '', value: '' }],
      //   required: true,
      // },
      // {
      //   label: 'Select Client Type',
      //   field: 'client_type',
      //   endPoint: 'client-types',
      //   type: 'dropdown',
      //   options: [{ label: '', value: '' }],
      //   required: true,
      // },
    ],
  },
  {
    label: 'Customer Information',
    fields: [
      {
        label: 'Search a Customer',
        field: 'customer_id',
        endPoint: 'customers',
        // endPoint: 'customer-information?customer_type=individual_customer',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'First Name',
        field: 'first_name',
        type: 'text',
        required: true,
      },
      {
        label: 'Last Name',
        field: 'last_name',
        type: 'text',
        required: true,
      },
      { label: 'Email', field: 'email', type: 'text', required: true },
      { label: 'Address', field: 'address', type: 'text', required: true },
      {
        label: 'ZIP/Postal Code',
        field: 'zip',
        type: 'text',
        required: true,
      },
      { label: 'City', field: 'city', type: 'text', required: true },
      {
        label: 'State',
        field: 'state',
        type: 'text',
        required: true,
      },
      {
        label: 'Country',
        field: 'country',
        type: 'text',
        required: true,
      },
    ],
  },
  {
    label: 'Job Address Information',
    fields: [
      {
        label: 'Check if same as Customer Address',
        field: 'customer_address',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'First Name',
        field: 'last_name',
        type: 'text',
        required: true,
      },
      {
        label: 'Last Name',
        field: 'last_name',
        type: 'text',
        required: true,
      },
      { label: 'Address', field: 'address', type: 'text', required: true },
      {
        label: 'ZIP/Postal Code',
        field: 'zip',
        type: 'text',
        required: true,
      },
      { label: 'City', field: 'city', type: 'text', required: true },
      {
        label: 'Select Country',
        field: 'country',
        type: 'text',
        required: true,
      },
      {
        label: 'Select Province/State',
        field: 'state',
        type: 'text',
        required: true,
      },
      {
        label: 'Main Phone No.',
        field: 'phone_no',
        type: 'number',
        required: true,
      },
    ],
  },
  // {
  //   label: 'Insurance Information',
  //   fields: [
  //     {
  //       label: 'Broker/Agent',
  //       field: 'broker',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Broker/Agent Contact',
  //       field: 'broker_contact',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Insurance Carrier',
  //       field: 'insurance_carrier',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Primary Adjuster',
  //       field: 'primary_adjuster',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'TPA Company',
  //       field: 'tpa_company',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'TPA',
  //       field: 'tpa',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Independent Adjusting Firm',
  //       field: 'independent_adjusting_firm',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Independent Adjuster Contact',
  //       field: 'independent_adjuster_contact',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Public Adjusting Firm',
  //       field: 'public_adjusting_firm',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Public Adjuster Contact',
  //       field: 'public_adjuster_contact',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Property Management',
  //       field: 'property_management',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //     {
  //       label: 'Property Management Contact',
  //       field: 'property_management_contact',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //       create: true,
  //       icon: 'pi pi-plus',
  //       create_label: 'Add New Company',
  //     },
  //   ],
  // },
  {
    label: 'Loss & Policy Information',
    fields: [
      {
        label: 'Date of Loss',
        field: 'loss_date',
        type: 'date',
        required: true,
      },
      {
        label: 'Loss Category',
        field: 'loss_cat_id',
        endPoint: 'loss-cateogories',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Source of Loss',
        field: 'source_loss_id',
        endPoint: 'source-loss',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Affected Rooms',
        field: 'loss_affected_room_id',
        endPoint: 'source-affected-rooms ',
        type: 'dropdown',
        multiple: true,
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Loss Type',
        field: 'loss_type_id',
        endPoint: 'loss-types',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'CAT Reference #',
        field: 'cat_ref_id',
        type: 'text',
        // options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Job Size',
        field: 'job_size_id',
        endPoint: 'job-size',
        type: 'dropdown',
        options: [{ label: '', value: '' }],
        required: true,
      },
      {
        label: 'Code Red ID',
        field: 'code_red_id',
        type: 'text',
        required: true,
      },
      {
        label: 'Emergency Service Required',
        field: 'is_emergency_service',
        type: 'checkbox',
        required: false,
      },
    ],
  },
  {
    label: 'Policy Information',
    fields: [
      {
        label: 'Claim Number',
        field: 'claim_number',
        type: 'text',
        required: true,
      },
      {
        label: 'Policy Number',
        field: 'policy_number',
        type: 'text',
        required: true,
      },
      {
        label: 'Policy Start Date',
        field: 'policy_start_date',
        type: 'date',
        required: true,
      },
      {
        label: 'Policy Expiration Date',
        field: 'policy_end_date',
        type: 'date',
        required: true,
      },
    ],
  },
  {
    label: 'Required Services',
    fields: [
      {
        label: 'Asbestos',
        field: 'asbestos',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Tarp',
        field: 'tarp',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'BioHazard',
        field: 'bioHazard',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Warranty',
        field: 'warranty',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Board Up',
        field: 'board_up',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Water Mitigation',
        field: 'water_mitigation',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Contents',
        field: 'contents',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Hoarding',
        field: 'hoarding',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Mold Remediation',
        field: 'mold_remediation',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Structural Cleaning',
        field: 'structural_cleaning',
        type: 'checkbox',
        required: false,
      },
      {
        label: 'Structural Repairs',
        field: 'structural_repairs',
        type: 'checkbox',
        required: false,
      },
    ],
  },
  // {
  //   label: 'Payment Services',
  //   fields: [
  //     {
  //       label: 'Deductible Required',
  //       field: 'deductible_required',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //     },
  //     {
  //       label: 'Amount',
  //       field: 'amount',
  //       type: 'number',
  //       required: true,
  //     },
  //     {
  //       label: 'Collect When',
  //       field: 'collect_when',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //     },
  //     {
  //       label: 'Bill To Participant',
  //       field: 'bill_to_Participant',
  //       type: 'dropdown',
  //       options: [{ label: '', value: '' }],

  //       required: false,
  //     },
  //     {
  //       label: 'Dwelling',
  //       field: 'dwelling',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       label: 'Contents',
  //       field: 'contents',
  //       type: 'text',
  //       required: true,
  //     },
  //     {
  //       label: 'Other Structures',
  //       field: 'other_structures',
  //       type: 'text',
  //       required: true,
  //     },
  //   ],
  // },
  {
    label: 'Loss Description & Special Instructions',
    fields: [
      {
        label:
          'Loss Description (Briefly describe the nature and location of the damage to this property).',
        field: 'loss_description',
        type: 'textarea',
        required: false,
      },
      {
        label:
          'Special Instructions (Enter special instructions for the Service Provider).',
        field: 'special_instructions',
        type: 'textarea',
        required: false,
      },
    ],
  },
];
