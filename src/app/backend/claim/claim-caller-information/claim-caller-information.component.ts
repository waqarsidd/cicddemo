import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { AuthService } from '@app/services/auth.service';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-caller-information',
  templateUrl: './claim-caller-information.component.html',
  styleUrls: ['./claim-caller-information.component.scss'],
})
export class ClaimCallerInformationComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};
  public formField = CREATE_CLAIM_FIELDS[0];
  public formGroup: FormGroup;
  public isFormSubmitted: boolean;

  constructor(
    private claimHelperService: ClaimHelperService,
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    const values = {
      referred_by_type: 'contact',
      reported_by: this.authService.loggedInUser.value?.user?.email,
    };
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields, values)
    );
    this.handleFormChanges();
  }

  private handleFormChanges() {
    this.formGroup.get('referred_by_type').valueChanges.subscribe((res) => {
      if (res === 'contact') {
        this.formField.fields.find(
          ({ field }) => field === 'provider'
        ).hide = true;
        this.formGroup.get('provider').clearValidators();
        this.formGroup.get('contact').setValidators([Validators.required]);
        this.formField.fields.find(
          ({ field }) => field === 'contact'
        ).hide = false;
      } else {
        this.formField.fields.find(
          ({ field }) => field === 'provider'
        ).hide = false;
        this.formField.fields.find(
          ({ field }) => field === 'contact'
        ).hide = true;
        this.formGroup.get('contact').clearValidators();
        this.formGroup.get('provider').setValidators([Validators.required]);
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
    values.referred_by = values.provider || values.contact;
    Object.assign(this.claimFieldsValue, values);
    this.goNext.emit();
  }
}
