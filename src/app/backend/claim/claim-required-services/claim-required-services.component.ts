import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-claim-required-services',
  templateUrl: './claim-required-services.component.html',
  styleUrls: ['./claim-required-services.component.scss'],
})
export class ClaimRequiredServicesComponent {
  @Output() public goNext: EventEmitter<any> = new EventEmitter();
  @Output()
  public goPrevious: EventEmitter<any> = new EventEmitter();
  @Input() public claimFieldsValue: {};

  public fields: Array<IFormField>;
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;
  public isReqPending = true;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {
    this.getJobs();
  }

  private getJobs() {
    const endpoint = 'job-types';

    this.dataService.getCreateClaimResources(endpoint).subscribe(
      (res) => {
        if (res.success) {
          this.makeFormFields(res.data);
        }
      },
      (_) => {
        this.isReqPending = false;
      }
    );
  }

  private makeFormFields(apiResData) {
    this.fields = apiResData.map((res) => {
      return {
        label: res.name,
        field: res.id,
        type: 'checkbox',
        multiple: true,
      };
    });
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.fields)
    );
    this.isReqPending = false;
  }

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    let value = this.formGroup.value;
    const ids = [];
    Object.keys(value).forEach((id) => {
      if (value[id]) {
        ids.push(id);
      }
    });
    value = ids.toString();
    Object.assign(this.claimFieldsValue, { job_type_id: value });
    this.goNext.emit();
  }
}
