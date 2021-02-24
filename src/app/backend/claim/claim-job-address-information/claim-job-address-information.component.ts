import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { ITabFormField } from '@app/models/tabFormField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';
const CUSTOMER_COMPANY_ADDRESS: ITabFormField = {
  label: '',
  fields: [
    {
      label: 'Check if same as Customer Company Address',
      field: 'customer_company_address',
      type: 'checkbox',
      required: false,
    },
    {
      label: 'Select Location',
      field: 'location',
      type: 'dropdown',
      options: [{ label: '', value: '' }],
      required: true,
    },
    {
      label: 'Select Contact Person',
      field: 'contact_person',
      type: 'dropdown',
      options: [{ label: '', value: '' }],
      required: true,
    },
    {
      label: 'Job Address',
      field: 'last_name',
      type: 'text',
      required: true,
    },
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
      type: 'dropdown',
      options: [{ label: '', value: '' }],

      required: true,
    },
    {
      label: 'Select Province/State',
      field: 'state',
      type: 'dropdown',
      options: [{ label: '', value: '' }],

      required: true,
    },
    {
      label: 'Main Phone No.',
      field: 'phone_no',
      type: 'number',
      required: true,
    },
  ],
};

@Component({
  selector: 'app-claim-job-address-information',
  templateUrl: './claim-job-address-information.component.html',
  styleUrls: ['./claim-job-address-information.component.scss'],
})
export class ClaimJobAddressInformationComponent implements OnInit {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: any;

  public formField: ITabFormField;
  public isFormSubmitted: boolean;

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private claimHelperService: ClaimHelperService
  ) {}

  ngOnInit() {
    if (this.claimFieldsValue.formType === 'company') {
      this.formField = CUSTOMER_COMPANY_ADDRESS;
    } else {
      this.formField = CREATE_CLAIM_FIELDS[3];
    }
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
    this.formGroup.get('customer_address').valueChanges.subscribe((res) => {
      if (res) {
        this.formGroup.patchValue({
          first_name: this.claimFieldsValue.first_name,
          last_name: this.claimFieldsValue.last_name,
          email: this.claimFieldsValue.email,
          address: this.claimFieldsValue.address,
          zip: this.claimFieldsValue.zip,
          city: this.claimFieldsValue.city,
          country: this.claimFieldsValue.country,
          state: this.claimFieldsValue.state,
        });
      }
    });
  }

  public onDropdownFieldFocus(field: IFormField) {
    this.claimHelperService.getClaimResource(field);
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.value;
    Object.assign(this.claimFieldsValue, values);
    this.goNext.emit();
  }
}
