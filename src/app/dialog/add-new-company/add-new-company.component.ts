import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ADD_NEW_COMPANY_FIELDS } from '@app/CONSTANT/add-new-company-fields';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-add-new-company',
  templateUrl: './add-new-company.component.html',
  styleUrls: ['./add-new-company.component.scss'],
})
export class AddNewCompanyComponent {
  public formField = ADD_NEW_COMPANY_FIELDS;
  public isFormSubmitted: boolean;

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField)
    );
  }

  public onSubmit() {}
}
