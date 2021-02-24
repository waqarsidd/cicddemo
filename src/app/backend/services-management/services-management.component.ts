import { IFormField } from '@app/models/formField';
import { FormControl } from '@angular/forms';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { SERVICE_FIELDS } from '@app/CONSTANT/service-fields';
import { Router, ActivatedRoute } from '@angular/router';
import { IService } from '@app/models/service';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.scss'],
})
export class ServicesManagementComponent {
  public totalRecords: number;
  public isReqPending: boolean;
  public globalFilterFields = SERVICE_FIELDS.filter(({ filter }) => filter);
  public searchControl: FormControl = new FormControl('');
  public searchedOptions: Array<any> = [];
  public columns: Array<IFormField> = SERVICE_FIELDS.filter(({ read }) => read);
  public data: Array<IService> = [];
  public selectedItems: Array<any> = [];

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.getServices();
    this.handleSearch();
  }

  private handleSearch() {
    this.searchControl.valueChanges.subscribe((searchKeyword) => {});
  }

  private getServices() {
    this.isReqPending = true;
    this.dataService.getServices().subscribe(
      (data) => {
        this.isReqPending = false;
        this.totalRecords = data.length;
        this.data = data.map((row) => ({
          id: row.id,
          carrier_id: row.customer_id,
          provider_location: null,
          name: row.customer?.name,
          street: null,
          city: row.address?.city,
          zip: row.address?.zip,
          jobs: null,
          description: null,
          status: row.status,
        }));
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
