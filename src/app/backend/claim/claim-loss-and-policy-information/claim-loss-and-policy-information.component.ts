import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-loss-and-policy-information',
  templateUrl: './claim-loss-and-policy-information.component.html',
  styleUrls: ['./claim-loss-and-policy-information.component.scss'],
})
export class ClaimLossAndPolicyInformationComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public formField = CREATE_CLAIM_FIELDS[4];
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private claimHelperService: ClaimHelperService,
    private datePipe: DatePipe
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
    values.loss_affected_room_id = values.loss_affected_room_id.toString();
    values.loss_date = this.datePipe.transform(values.loss_date, 'dd/MM/yyyy');
    Object.assign(this.claimFieldsValue, values);
    this.goNext.emit();
  }
}
