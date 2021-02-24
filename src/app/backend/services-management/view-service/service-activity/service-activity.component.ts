import { Component  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVICE_ACTIVITY } from '@app/CONSTANT/service-activity';
import { IFormField } from '@app/models/formField';
import { DataService } from '@app/services/data.service';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-service-activity',
  templateUrl: './service-activity.component.html',
  styleUrls: ['./service-activity.component.scss']
})
export class ServiceActivityComponent  {
public totalRecords: number;
public isReqPending: boolean;
public globalFilterFields = SERVICE_ACTIVITY.filter(({ filter }) => filter);
public searchControl: FormControl = new FormControl('');
public searchedOptions: Array<any> = [];
public columns: Array<IFormField> = SERVICE_ACTIVITY.filter(({ read }) => read);
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

public view(row) {
  this.router.navigate([`./view/${row.id}`], {
    relativeTo: this.activatedRoute,
  });
}

public clear(table: Table) {
  table.clear();
}

}
