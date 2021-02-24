import { DataService } from '@app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SERVICE_FIELDS } from '@app/CONSTANT/service-fields';
import { IFormField } from '@app/models/formField';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent {
  public formField = SERVICE_FIELDS.filter(({ create }) => create);
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;
  public isEdit: boolean;
  public isReqPending: boolean;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.handleForm();
    this.handleParams();
  }

  private handleParams() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      if (id) {
        this.isEdit = true;
      }
    });
  }

  private handleForm() {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField)
    );
  }

  public onDropdownFieldFocus(field: IFormField) {}

  public onChange(event, field: IFormField) {}

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.value;
    this.isReqPending = true;
    this.dataService.createService(values).subscribe(
      () => {
        this.isReqPending = false;
      },
      () => {
        this.isReqPending = false;
      }
    );
  }
}
