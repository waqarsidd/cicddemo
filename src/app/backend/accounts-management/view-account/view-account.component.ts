import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.scss'],
})
export class ViewAccountComponent {
  public accountName: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.handleParams();
  }

  private handleParams() {
    this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      if (id) {
        this.accountName = id;
      } else {
      }
    });
  }

  // public handleTabChange(e) {
  //   console.log(e);
  //   this.activeTab = e.index;
  // this.activeItem = e.item;
  // this.activeTab = e.item.label;
  // console.log(this.activeTab);
  // }

  // public activeIndexChange(stepIndex: number) {
  //   this.activeTab = stepIndex;
  //   // this.router.navigate(['./'], {
  //   //   relativeTo: this.activatedRoute,
  //   //   fragment: this.steps[stepIndex],
  //   // });
  // }
}
