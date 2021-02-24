import { Injectable } from '@angular/core';
import { IFormField } from '@app/models/formField';
import { IGetClaimResourceResPayload } from '@app/response-payload/getClaimResourceResPayload';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ClaimHelperService {
  constructor(private dataService: DataService) {}

  public getClaimResource(field: IFormField) {
    if (field.options.length > 1 || !field.endPoint || field.options[0].value) {
      return;
    }
    field.isReqPending = true;
    this.dataService.getCreateClaimResources(field.endPoint).subscribe(
      (res: IGetClaimResourceResPayload) => {
        if (res.success) {
          field.isReqPending = false;
          field.options = res.data.map(({ id, name }) => ({
            value: id,
            label: name,
          }));
        } else {
          field.isReqPending = false;

          field.options = [
            { value: res.message, label: res.message, disabled: true },
          ];
        }
      },
      (_) => {
        field.options = [{ value: '', label: 'Not Found', disabled: true }];
        field.isReqPending = false;
      }
    );
  }
}
