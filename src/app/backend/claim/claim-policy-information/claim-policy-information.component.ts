import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-policy-information',
  templateUrl: './claim-policy-information.component.html',
  styleUrls: ['./claim-policy-information.component.scss'],
})
export class ClaimPolicyInformationComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public formField = CREATE_CLAIM_FIELDS[5];
  public formGroup: FormGroup;
  public isFormSubmitted: boolean;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.value;
    values.policy_start_date = this.datePipe.transform(
      values.policy_start_date,
      'dd/MM/yyyy'
    );
    values.policy_end_date = this.datePipe.transform(
      values.policy_end_date,
      'dd/MM/yyyy'
    );

    Object.assign(this.claimFieldsValue, values);
    this.goNext.emit();
  }
}
