import { IFormField } from '../../../../models/formField';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SERVICE_DETAILS } from '@app/CONSTANT/service-details';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss'],
})
export class ServiceDetailsComponent {
  public claimFormFields: Array<IFormField> = SERVICE_DETAILS[0].fields;
  public customerFormFields: Array<IFormField> = SERVICE_DETAILS[1].fields;
  public isFormSubmitted: boolean;

  public claimFormGroup: FormGroup;
  public customerFormGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder // private dataService: DataService
  ) {
    this.claimFormGroup = this.makeForm(this.claimFormFields);
    this.customerFormGroup = this.makeForm(this.customerFormFields);
  }

  private makeForm(fields) {
    return this.formBuilder.group(this.helperService.getFormFields(fields));
  }

  public onSubmit() {
    this.isFormSubmitted = true;

    // const values = this.formGroup.value;
  }
}
