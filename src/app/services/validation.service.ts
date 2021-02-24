import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  // public getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
  //   const config = this.translate.instant('validation');
  //   config.minlength = config.minlength + validatorValue.requiredLength;
  //   return config[validatorName];
  // }

  public creditCardValidator(control) {
    // Visa, MasterCard, American Express, Diners Club, Discover, JCB
    if (
      control.value.match(
        /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
      )
    ) {
      return null;
    } else {
      return { invalidCreditCard: true };
    }
  }

  public emailValidator(control) {
    // RFC 2822 compliant regex
    if (
      control.value &&
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  public passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (
      control.value &&
      control.value.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      )
    ) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  public acuSerialValidator(control) {
    // ACUB40E1928001443 // ACUB40E1928001340
    // SES + an abbreviated version of the model number which takes up the next 7 or 8 characters,
    // then the board revision letter A - Z, then 2 - 3 0s
    // depending on the length of the model number,
    // then the last 5 characters increment but they go 0 - 9 then a - z

    if (
      control.value &&
      control.value.match(/^SES[A-Z0-9]{7,8}\D{1}\d{2,3}\d{1,5}[a-z0-9]{2}/)
    ) {
      return null;
    } else {
      return { invalidAcuSerial: true };
    }
  }
  public passwordConfirmMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const passwordConfirm = formGroup.get('password_confirmation');

    if (
      passwordConfirm.hasError('required') ||
      passwordConfirm.hasError('minlength')
    ) {
      return;
    }

    if (password.value !== passwordConfirm.value) {
      passwordConfirm.setErrors({
        mismatch: true,
      });
    } else {
      passwordConfirm.setErrors(null);
    }
  }

  public chassisSerialValidator(control) {
    // SES + an abbreviated version of the model number which takes up the next 7 or 8 characters,
    // then the board revision letter A - Z, then 2 - 3 0s
    // depending on the length of the model number,
    // then the last 5 characters increment but they go 0 - 9 then a - z
    if (
      control.value &&
      control.value.match(/^SES[A-Z0-9]{7,8}\D{1}\d{2,3}\d{1,5}[a-z0-9]{2}/)
    ) {
      return null;
    } else {
      return { invalidAcuSerial: true };
    }
  }
}
