import { Component } from '@angular/core';
import { SERVICE_AREA_ZIPCODE_FIELDS } from '@app/CONSTANT/service-area-zipcodes-fields';
import { IFormField } from '@app/models/formField';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-add-zipcode',
  templateUrl: './add-zipcode.component.html',
  styleUrls: ['./add-zipcode.component.scss'],
})
export class AddZipcodeComponent {
  public columns: Array<IFormField> = SERVICE_AREA_ZIPCODE_FIELDS;
  public globalFilterFields = SERVICE_AREA_ZIPCODE_FIELDS.filter(
    ({ filter }) => filter
  );
  public sourceData: Array<any> = [];
  public targetData: Array<any> = [];
  public totalRecords: number;
  public isReqPending: boolean;
  public selectedSourceItems = [];
  public selectedTargetItems = [];

  constructor() {}

  public add() {}
  public remove() {}

  public loadData(event: LazyLoadEvent) {
    console.log(event);
  }
}
