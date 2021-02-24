import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { ICreateClaimReqPayload } from '@app/request-payload/createClaimReqPayload';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-loss-description-and-speical-instructions',
  templateUrl:
    './claim-loss-description-and-speical-instructions.component.html',
  styleUrls: [
    './claim-loss-description-and-speical-instructions.component.scss',
  ],
})
export class ClaimLossDescriptionAndSpeicalInstructionsComponent {
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: ICreateClaimReqPayload;

  public formField = CREATE_CLAIM_FIELDS[7];
  public isFormSubmitted: boolean;

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private dataService: DataService
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
    Object.assign(this.claimFieldsValue, values);
    this.dataService.createService(this.claimFieldsValue).subscribe(() => {});
  }
}
