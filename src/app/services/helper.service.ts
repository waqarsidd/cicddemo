import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { IFormField } from '../models/formField';
import { ValidationService } from './validation.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  public isShowBugReportDialog: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {}

  public generateId() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  public getFormFields(
    fields: Array<IFormField>,
    values?: { [key: string]: any }
  ): { [key: string]: FormControl } {
    return fields.reduce(
      (formGroup: { [key: string]: FormControl }, formField: IFormField) => {
        formGroup[formField.field] = this.formBuilder.control(
          {
            value:
              (values && values[formField.field]) ||
              (formField.type === 'checkbox'
                ? false
                : formField.type === 'dropdown' && formField.multiple
                ? []
                : undefined),
            disabled: formField.disabled,
          },
          this.getFieldValidation(formField)
        );
        return formGroup;
      },
      {}
    );
  }

  public getFieldValidation(field: IFormField) {
    switch (field.type) {
      case 'password':
        return Validators.compose([
          field.required ? Validators.required : null,
          this.validationService.passwordValidator,
        ]);
      case 'email':
        return Validators.compose([
          field.required ? Validators.required : null,
          this.validationService.emailValidator,
        ]);
      case 'text':
      case 'number':
      case 'date':
      case 'dropdown':
      case 'checkbox':
        return Validators.compose([
          field.required ? Validators.required : null,
        ]);
      default:
        break;
    }
  }

  public setDataOnLocalStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  public getDataOnLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
