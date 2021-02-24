import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ACCOUNT_LOCATION_FIELDS } from '@app/CONSTANT/account-location';
import { IFormField } from '@app/models/formField';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-account-location',
  templateUrl: './account-location.component.html',
  styleUrls: ['./account-location.component.scss'],
})
export class AccountLocationComponent {
  public contactFormFields: Array<IFormField> =
    ACCOUNT_LOCATION_FIELDS[0].fields;
  public addressFormFields: Array<IFormField> =
    ACCOUNT_LOCATION_FIELDS[1].fields;
  public locationFormFields: Array<IFormField> =
    ACCOUNT_LOCATION_FIELDS[2].fields;
  public isFormSubmitted: boolean;

  public contactFormGroup: FormGroup;
  public addressFormGroup: FormGroup;
  public locationFormGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder // private dataService: DataService
  ) {
    this.contactFormGroup = this.makeForm(this.contactFormFields);
    this.addressFormGroup = this.makeForm(this.addressFormFields);
    this.locationFormGroup = this.makeForm(this.locationFormFields);
  }

  private makeForm(fields) {
    return this.formBuilder.group(this.helperService.getFormFields(fields));
  }

  public onSubmit() {
    this.isFormSubmitted = true;

    // const values = this.formGroup.value;
  }
}
