import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ACCOUNT_FIELDS } from '@app/CONSTANT/account-fields';
import { IAccount } from '@app/models/account';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-accounts-management',
  templateUrl: './accounts-management.component.html',
  styleUrls: ['./accounts-management.component.css'],
})
export class AccountsManagementComponent {
  public totalRecords: number;
  public isReqPending: boolean;
  public globalFilterFields = ACCOUNT_FIELDS.filter(({ filter }) => filter);
  public searchControl: FormControl = new FormControl('');
  public searchedOptions: Array<any> = [];
  public columns: Array<IFormField> = ACCOUNT_FIELDS.filter(({ read }) => read);
  public data: Array<IAccount> = [];
  // public datasource: Array<IAccount> = [];
  public selectedItems: Array<any> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getAccounts();
    this.handleSearch();
  }

  private handleSearch() {
    this.searchControl.valueChanges.subscribe((searchKeyword) => {});
  }

  private getAccounts() {
    this.isReqPending = true;
    this.dataService.getAccounts().subscribe(
      ({ data }) => {
        this.isReqPending = false;
        this.totalRecords = data.data.length;
        this.data = data.data.map((row) => ({
          id: row.id,
          name: row.name,
          location_type: row.mailing_address?.location_type?.name,
          primary_phone: row.primary_phone,
          zip: row.mailing_address?.zip,
        }));
        // this.datasource = data.data;
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
    // this.isReqPending = true;
    // setTimeout(() => {
    //   if (this.datasource) {
    //     this.data = this.datasource.slice(
    //       event.first,
    //       event.first + event.rows
    //     );
    //     this.isReqPending = false;
    //   }
    // }, 1000);
  }

  public edit(row) {
    this.router.navigate([`./${row.id}`], { relativeTo: this.activatedRoute });
  }

  public view(row) {
    this.router.navigate([`./view/${row.id}`], {
      relativeTo: this.activatedRoute,
    });
  }

  public clear(table: Table) {
    table.clear();
  }
}
