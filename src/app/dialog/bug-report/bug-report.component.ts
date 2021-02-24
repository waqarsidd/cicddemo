import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BUG_REPORT_FIELDS } from '@app/CONSTANT/bug-report-fields';
import { HelperService } from '@app/services/helper.service';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss'],
})
export class BugReportComponent {
  public formField = BUG_REPORT_FIELDS;
  public isFormSubmitted: boolean;

  public formGroup: FormGroup;

  constructor(
    private helperService: HelperService,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group(
      this.helperService.getFormFields(this.formField, {
        phone: +91123456789,
        email: 'support@gowithcore.com',
      })
    );
  }

  public onSubmit() {}
}
