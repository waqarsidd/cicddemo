import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormField } from '@app/models/formField';
import { HelperService } from '@app/services/helper.service';
import { CREATE_PROGRAM_FIELDS } from '@app/CONSTANT/create-program-fields';
import { DataService } from '@app/services/data.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent {
  public formField: Array<IFormField> = CREATE_PROGRAM_FIELDS.filter(
    ({ create }) => create
  );
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;
  public isEdit: boolean;
  public isReqPending: boolean;
  public divisions: Array<IFormField>;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.handleParams();
    this.getJobs();
  }

  private getJobs() {
    this.isReqPending = true;
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
    this.divisions = apiResData.map((res) => {
      return {
        label: res.name,
        field: res.id,
        type: 'checkbox',
        multiple: true,
      };
    });
    this.divisions[0].groupLabel = 'Applies To Division(s)';
    this.formField = [...this.formField, ...this.divisions];
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField)
    );
    this.handleForm();
    this.isReqPending = false;
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
    this.formGroup.get('dispatch_method').valueChanges.subscribe((res) => {
      const dispatchMethodField = this.formField.find(
        ({ field }) => field === 'select_dispatch_method'
      );
      if (res === 'manual') {
        dispatchMethodField.hide = false;
      } else {
        dispatchMethodField.hide = true;
      }
    });
  }

  public onDropdownFieldFocus(field: IFormField) {}

  public onChange(event, field: IFormField) {}

  public onSubmit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.getRawValue();

    values.divisions = this.divisions.reduce((acc, currentVal) => {
      if (Object(values).hasOwnProperty(currentVal.field)) {
        if (values[currentVal.field]) {
          acc.push(currentVal.field);
        }
        delete values[currentVal.field];
      }
      return acc;
    }, []);
    console.log({ values });
  }
}
