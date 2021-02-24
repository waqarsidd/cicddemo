import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { APPLY_CONTRACTOR_FOR_ONCORE } from '@app/CONSTANT/apply-for-provider-fields';
import { IFormField } from '@app/models/formField';
import { ITabFormField } from '@app/models/tabFormField';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css'],
})
export class AddProviderComponent {
  public formGroup: FormGroup;
  public isFormSubmitted: boolean;
  public isReqPending: boolean;
  public tabs: Array<ITabFormField> = APPLY_CONTRACTOR_FOR_ONCORE;
  public fields: Array<IFormField>;
  public activeTabIndex = 0;
  public isFormLoaded: boolean;
  private formValues: { [key: number]: { [key: string]: any } } = {};

  constructor(
    private formBuilder: FormBuilder,
    private helperService: HelperService
  ) {
    this.setTabForm(this.activeTabIndex);
  }

  private setTabForm(index) {
    this.isFormSubmitted = false;
    this.isFormLoaded = false;
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(
        this.fields,
        (this.formValues && this.formValues[index]) || null
      )
    );
    setTimeout(() => {
      this.isFormLoaded = true;
    });
  }

  public activeIndexChange(event) {
    console.log('----', event);
  }

  public submit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid || this.formGroup.untouched) {
      return;
    }
    const values = this.formGroup.value;
  }

  public changeTab(tabIndex) {
    if (this.activeTabIndex === Number(tabIndex)) {
      return;
    }
    if (APPLY_CONTRACTOR_FOR_ONCORE[tabIndex].enabled) {
      this.setTabIndex(tabIndex);
      this.setTabForm(tabIndex);
      return;
    }
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const value = this.formGroup.value;
    this.saveTabFormValues(value);
    APPLY_CONTRACTOR_FOR_ONCORE[tabIndex].enabled = true;
    this.setTabIndex(tabIndex);
    this.setTabForm(tabIndex);
  }

  private setTabIndex(index) {
    this.activeTabIndex = Number(index);
  }

  private saveTabFormValues(values: any) {
    this.formValues[this.activeTabIndex] = values;
  }
}
