import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICE_FIELDS } from '@app/CONSTANT/service-fields';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-reports-management',
  templateUrl: './reports-management.component.html',
  styleUrls: ['./reports-management.component.css']
})
export class ReportsManagementComponent   {

  public totalRecords: number;
  public isReqPending: boolean;
  public globalFilterFields = SERVICE_FIELDS.filter(
    ({ filter }) => filter
  );
  public searchControl: FormControl = new FormControl('');
  public searchedOptions: Array<any> = [];
  public columns: Array<IFormField> = SERVICE_FIELDS;
  public data: Array<any> = [];
  public datasource: Array<any> = [];
  public selectedItems: Array<any> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getServicesList();
    this.handleSearch();
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
        this.datasource = data;
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
    this.isReqPending = true;

    setTimeout(() => {
      if (this.datasource) {
        this.data = this.datasource.slice(
          event.first,
          event.first + event.rows
        );
        this.isReqPending = false;
      }
    }, 1000);
  }

  public edit(row) {
    this.router.navigate([`./${row.id}`], { relativeTo: this.activatedRoute });
  }

  public clear(table: Table) {
    table.clear();
  }

}
