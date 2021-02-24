import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { HelperService } from '@app/services/helper.service';
import { LOCAL_STORAGE_CONSTANTS } from '@app/CONSTANT/constants';
import { IFormField } from '@app/models/formField';
import { SIGNIN_FIELDS } from '@app/CONSTANT/auth-form-fields';
import { ILoginResPayload } from '@app/response-payload/loginResPayload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public formGroup: FormGroup;
  public isReqPending: boolean;
  public isFormSubmitted: boolean;
  public fields: Array<IFormField> = SIGNIN_FIELDS.customer;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.fields, {
        remember: false,
      })
    );
    // this.formGroup.get('password').setValidators([Validators.required]);
    this.formGroup.get('password').setValidators([Validators.required]);
    this.handleRememberUserName();
  }

  private handleRememberUserName() {
    const userName = this.helperService.getDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.USERNAME
    );
    if (!userName) {
      return;
    }
    this.formGroup.controls.email.setValue(userName);
    this.formGroup.controls.remember.setValue(true);
  }

  public async submit() {
    this.isFormSubmitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    this.isReqPending = true;
    const value = this.formGroup.value;
    this.helperService.setDataOnLocalStorage(
      LOCAL_STORAGE_CONSTANTS.USERNAME,
      value.remember ? value.email : null
    );
    delete value.remember;
    this.authService.login(value).subscribe(
      async (res: ILoginResPayload) => {
        this.isReqPending = false;
        if (!res) {
          return;
        }
        this.router.navigate(['dashboard']);
      },
      (err) => {
        this.isReqPending = false;
      }
    );
  }
}
