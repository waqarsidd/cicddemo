import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormField } from '@app/models/formField';
import { HelperService } from '@app/services/helper.service';
import { CONTACT_FIELDS } from '@app/CONSTANT/contact-fields';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public formField = CONTACT_FIELDS.filter(({ create }) => create);
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;
  public isEdit: boolean;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
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
  }
}
