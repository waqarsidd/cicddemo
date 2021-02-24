import { AddZipcodeComponent } from './add-zipcode/add-zipcode.component';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DIALOG_CONSTANT } from '@app/CONSTANT/constants';
import { VIEW_SERVICE_AREAS_FIELDS } from '@app/CONSTANT/view-service-areas-fields';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { LazyLoadEvent } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { AddServiceComponent } from './add-service/add-service.component';

@Component({
  selector: 'app-view-service-area',
  templateUrl: './view-service-area.component.html',
  styleUrls: ['./view-service-area.component.scss'],
})
export class ViewServiceAreaComponent {
  public totalRecords: number;
  public isReqPending: boolean;
  public globalFilterFields = VIEW_SERVICE_AREAS_FIELDS.filter(
    ({ filter }) => filter
  );
  public searchControl: FormControl = new FormControl('');
  public searchedOptions: Array<any> = [];
  public columns: Array<IFormField> = VIEW_SERVICE_AREAS_FIELDS;
  public data: Array<any> = [];
  public selectedItems: Array<any> = [];
  public id: string;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialogService: DialogService
  ) {
    this.getServicesList();
    this.handleSearch();
    this.handleParams();
  }

  private handleParams() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      if (id) {
        this.id = id;
      }
    });
  }

  public addService() {
    this.dialogService
      .open(AddServiceComponent, {
        header: 'Add Service to Service Area',
        closeOnEscape: true,
        closable: true,
        height: '100%',
        width: DIALOG_CONSTANT.largeWidth,
        baseZIndex: 10000,
      })
      .onClose.subscribe();
  }

  public addZipcode() {
    this.dialogService
      .open(AddZipcodeComponent, {
        header: 'Add Zipcode to Service Area',
        closeOnEscape: true,
        closable: true,
        height: '100%',
        width: DIALOG_CONSTANT.largeWidth,
        baseZIndex: 10000,
      })
      .onClose.subscribe();
  }

  private handleSearch() {
    this.searchControl.valueChanges.subscribe((searchKeyword) => {});
  }

  private getServicesList() {
    this.isReqPending = true;
    this.dataService.getServices().subscribe(
      (data) => {
        this.isReqPending = false;
        this.totalRecords = data.length;
        this.data = data;
        // this.datasource = data;
      },
      (_) => {
        this.isReqPending = false;
      }
    );
  }

  public deleteSelected() {
    console.log(this.selectedItems);
  }

  public loadData(event: LazyLoadEvent) {
    console.log(event);

  }

  public edit(row) {
    this.router.navigate([`./${row.id}`], { relativeTo: this.activatedRoute });
  }

  public clear(table: Table) {
    table.clear();
  }
}
