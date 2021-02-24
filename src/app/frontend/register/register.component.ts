import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
import { SIGNUP_FIELDS } from '@app/CONSTANT/auth-form-fields';
import { IFormField } from '@app/models/formField';
import { ISignupResPayload } from '@app/response-payload/signupResPayload';
import { AuthService } from '@app/services/auth.service';
import { HelperService } from '@app/services/helper.service';
import { ValidationService } from '@app/services/validation.service';
// import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public formGroup: FormGroup;
  public isFormSubmitted: boolean;
  public isReqPending: boolean;
  public fields: Array<IFormField> = SIGNUP_FIELDS.customer;
  public successedMessage;

  constructor(
    public formBuilder: FormBuilder,
    private helperService: HelperService,
    // private router: Router,
    private authservice: AuthService,
    private validationService: ValidationService // private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.fields),
      {
        validators: this.validationService.passwordConfirmMatchValidator,
      }
    );
  }

  public submit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.isReqPending = true;
    const values = this.formGroup.value;
    this.authservice.register(values).subscribe(
      ({ success, errors, message }: ISignupResPayload) => {
        this.isReqPending = false;
        if (!success) {
          this.setBackendErrors(errors);
          return;
        }
        this.successedMessage = message;
        // this.successedMessage = [
        //   {
        //     severity: 'success',
        //     summary: 'Success',
        //     detail: `${message} <strong>Click here to login</strong>`,
        //   },
        // ];

        // setTimeout(() => {
        //   this.router.navigate(['/login']);
        // }, 1000);
      },
      (err) => {
        this.isReqPending = false;
      }
    );
  }

  private setBackendErrors(errors: { [key: string]: Array<string> }) {
    this.fields.forEach((element: IFormField) => {
      element.errors = [];
      if (errors[element.field]) {
        element.errors = errors[element.field];
      }
    });
  }
}
