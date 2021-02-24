import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ACCOUNT_JOBS } from '@app/CONSTANT/account-jobs';
import { ACCOUNT_SERVICE_AREA } from '@app/CONSTANT/account-service-area';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-account-service-area',
  templateUrl: './account-service-area.component.html',
  styleUrls: ['./account-service-area.component.scss'],
})
export class AccountServiceAreaComponent {
  public totalRecords: number;
  public isReqPending: boolean;
  public globalFilterFields = ACCOUNT_SERVICE_AREA.filter(
    ({ filter }) => filter
  );
  public searchControl: FormControl = new FormControl('');
  public searchedOptions: Array<any> = [];
  public columns: Array<IFormField> = ACCOUNT_SERVICE_AREA.filter(
    ({ read }) => read
  );
  public data: Array<any> = [];
  public datasource: Array<any> = [];
  public selectedItems: Array<any> = [];

  constructor(private dataService: DataService) {
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

  // public edit(row) {
  //   this.router.navigate([`./${row.id}`], { relativeTo: this.activatedRoute });
  // }

  // public view(row) {
  //   this.router.navigate([`./view/${row.id}`], {
  //     relativeTo: this.activatedRoute,
  //   });
  // }

  public clear(table: Table) {
    table.clear();
  }
}
