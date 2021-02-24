import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { ITabFormField } from '@app/models/tabFormField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

const COMPANY_INFORMATION: ITabFormField = {
  label: 'Customer As Company Information',
  fields: [
    {
      label: 'Select Customer Company',
      field: 'customer_id',
      endPoint: 'customer-information?customer_type=company_customer',
      type: 'dropdown',
      options: [{ label: '', value: '' }],
      required: true,
    },
    {
      label: 'Company Name',
      field: 'company_name',
      type: 'text',
      required: true,
    },
    {
      label: 'Company E-Mail',
      field: 'company_email',
      type: 'email',
      required: true,
    },
    {
      label: 'Company Address',
      field: 'company_address',
      type: 'text',
      required: true,
    },
    { label: 'ZIP/Postal Code', field: 'zip', type: 'text', required: true },
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
  ],
};

@Component({
  selector: 'app-claim-customer-information',
  templateUrl: './claim-customer-information.component.html',
  styleUrls: ['./claim-customer-information.component.scss'],
})
export class ClaimCustomerInformationComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public isFormSubmitted: boolean;

  public formField = CREATE_CLAIM_FIELDS[2];
  public formGroup: FormGroup;
  public activeForm = true;
  // public form = new FormGroup({
  //   formType: new FormControl('customer'),
  // });
  // private fields;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private claimHelperService: ClaimHelperService,
    private dataService: DataService
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
    // this.form.get('formType').valueChanges.subscribe((val) => {
    //   this.activeForm = false;
    //   setTimeout(() => {
    //     this.activeForm = true;
    //     if (val === 'customer') {
    //       this.formField = CREATE_CLAIM_FIELDS[2];
    //     } else {
    //       this.formField = COMPANY_INFORMATION;
    //     }
    //     this.fields = this.helperService.getFormFields(this.formField.fields);
    //     this.formGroup = this.formBuilder.group(this.fields);
    //   });
    // });
  }

  public onDropdownFieldFocus(field: IFormField) {
    this.claimHelperService.getClaimResource(field);
  }

  public onChange(event, field: IFormField) {
    if (field.field === 'customer_id') {
      this.dataService.getCustomerDetails(event.value).subscribe((res) => {
        if (res.success) {
          this.formGroup.patchValue({
            first_name: res.data.name.split(',')[0],
            last_name: res.data.name.split(',')[1],
            email: res.data.email,
            address: res.data.primary.address,
            zip: res.data.primary.zip,
            city: res.data.primary.city,
            country: res.data.primary.country,
            state: res.data.primary.state,
          });
        }
      });
    }
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.value;
    // values.formType = this.form.value.formType;
    Object.assign(this.claimFieldsValue, values);
    this.goNext.emit();
  }
}
