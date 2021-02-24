import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DIALOG_CONSTANT } from '@app/CONSTANT/constants';
import { CREATE_CLAIM_FIELDS } from '@app/CONSTANT/create-claim-fields';
import { AddNewCompanyComponent } from '@app/dialog/add-new-company/add-new-company.component';
import { IFormField } from '@app/models/formField';
import { ClaimHelperService } from '@app/services/claim-helper.service';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-claim-insurance-information',
  templateUrl: './claim-insurance-information.component.html',
  styleUrls: ['./claim-insurance-information.component.scss'],
})
export class ClaimInsuranceInformationComponent {
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
    public dialogService: DialogService,
    private dataService: DataService,
    private claimHelperService: ClaimHelperService
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField.fields)
    );
  }

  public create(field: IFormField) {
    this.dialogService
      .open(AddNewCompanyComponent, {
        header: field.create_label,
        closeOnEscape: true,
        closable: true,
        width: DIALOG_CONSTANT.mediumWidth,
        baseZIndex: 10000,
      })
      .onClose.subscribe();
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
