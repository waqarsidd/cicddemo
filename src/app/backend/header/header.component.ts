import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILoginResPayload } from '@app/response-payload/loginResPayload';
import { AuthService } from '@app/services/auth.service';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleHideSidebar: EventEmitter<any> = new EventEmitter();
  public items: MenuItem[];
  public username: string;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.loggedInUser.subscribe((res: ILoginResPayload) => {
      this.username = res.user.name;
    });
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
          },
          {
            label: 'Logout',
            icon: 'pi pi-fw pi-power-off',
            command: () => {
              this.router.navigate(['login']);
              this.authService.logout();
            },
          },
        ],
      },
    ];
  }
}
