import { Injectable } from '@angular/core';
import { DIALOG_CONSTANT } from '@app/CONSTANT/constants';
import { BugReportComponent } from '@app/dialog/bug-report/bug-report.component';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class InterceptorHelperService {
  constructor(public dialogService: DialogService) {}

  public confirmBugReportDialog(error: string, errorType?: string) {
    this.dialogService
      .open(BugReportComponent, {
        header: 'Bug Report',
        closeOnEscape: true,
        closable: true,
        width: DIALOG_CONSTANT.mediumWidth,
        baseZIndex: 10000,
      })
      .onClose.subscribe();
  }
}
