import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Data } from '@angular/router';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-payment-services',
  templateUrl: './claim-payment-services.component.html',
  styleUrls: ['./claim-payment-services.component.scss'],
})
export class ClaimPaymentServicesComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public formField = CREATE_CLAIM_FIELDS[7];
  public isFormSubmitted: boolean;

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private claimHelperService: ClaimHelperService,
    private dataService: DataService
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
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
