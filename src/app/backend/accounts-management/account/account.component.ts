import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFormField } from '@app/models/formField';
import { HelperService } from '@app/services/helper.service';
import { ACCOUNT_FIELDS } from '@app/CONSTANT/account-fields';
import { DataService } from '@app/services/data.service';
import { IAccount } from '@app/models/account';
import { NETWORK_ID } from '@app/CONSTANT/constants';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  public formField = ACCOUNT_FIELDS.filter(({ create }) => create);
  public isFormSubmitted: boolean;
  public formGroup: FormGroup;
  public isEdit: boolean;
  public isReqPending: boolean;
  public isPagePending: boolean;
  public account: IAccount;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {
    this.handleParams();
  }

  private handleParams() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      if (id) {
        this.isEdit = true;
        this.formField.find(({ field }) => field === 'type').disabled = true;
        this.getAccount(id);
      } else {
        this.handleForm();
      }
    });
  }

  private getAccount(id: string) {
    this.isPagePending = true;
    this.dataService.getAccount(id).subscribe(
      (res) => {
        this.account = res.data;
        this.handleForm();
        this.isPagePending = false;
      },
      (_) => {
        this.isPagePending = false;
      }
    );
  }

  private handleForm() {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField, this.account)
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
    values.network_id = NETWORK_ID;
    this.isReqPending = true;

    let accountApi;
    if (this.account?.id) {
      accountApi = this.dataService.updateAccount({
        id: this.account.id,
        ...values,
      });
    } else {
      accountApi = this.dataService.createAccount(values);
    }
    accountApi.subscribe(
      (res) => {
        this.isReqPending = false;
        setTimeout(() => {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        }, 1000);
      },
      (_) => {
        this.isReqPending = false;
      }
    );
  }
}
