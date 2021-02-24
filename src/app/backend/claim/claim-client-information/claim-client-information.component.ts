import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { IFormField } from '@app/models/formField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-client-information',
  templateUrl: './claim-client-information.component.html',
  styleUrls: ['./claim-client-information.component.scss'],
})
export class ClaimClientInformationComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public isFormSubmitted: boolean;
  public formField = CREATE_CLAIM_FIELDS[1];

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private claimHelperService: ClaimHelperService
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
    this.handleDropDownChange();
  }

  private handleDropDownChange() {
    // this.formGroup.get('carrier_id').valueChanges.subscribe((clientId) => {
    //   const locationField = this.formField.fields.find(
    //     ({ field }) => field === 'location'
    //   );
    //   const contactField = this.formField.fields.find(
    //     ({ field }) => field === 'client_contact'
    //   );
    //   this.formGroup.get('client_contact').enable();
    //   this.formGroup.get('location').enable();
    //   locationField.endPoint = `${locationField.endPoint}/${clientId}`;
    //   contactField.endPoint = `${contactField.endPoint}/${clientId}`;
    // });
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
