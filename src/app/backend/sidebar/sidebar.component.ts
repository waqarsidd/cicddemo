import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SIDEBAR_FIELDS } from '@app/CONSTANT/sidebar-fields';
import { AuthHelperService } from '@app/services/auth-helper.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Input() public toggleSidebar: boolean;
  @Output() toggleHideSidebar: EventEmitter<any> = new EventEmitter();

  public items: Array<MenuItem> = this.authHelperService.getAllowedFields(
    SIDEBAR_FIELDS
  );

  public onHide() {
    this.toggleHideSidebar.emit();
  }

  constructor(private authHelperService: AuthHelperService) {}
}
