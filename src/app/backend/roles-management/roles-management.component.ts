import { ViewChild, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROLES } from '@app/CONSTANT/roles';
import { IRole } from '@app/models/role';
import { RolesService } from '@app/services/roles.service';
@Component({
  selector: 'app-roles-management',
  templateUrl: './roles-management.component.html',
  styleUrls: ['./roles-management.component.scss'],
})
export class RolesManagementComponent implements OnInit {
  @ViewChild('roleForm') roleForm: FormGroupDirective;

  public formGroup: FormGroup = this.fb.group({
    role: ['', Validators.required],
    description: [''],
    users: this.fb.group({
      read: [false],
      create: [false],
      write: [false],
    }),
    clients: this.fb.group({
      read: [false],
      create: [false],
      write: [false],
    }),
    contractors: this.fb.group({
      read: [false],
      create: [false],
      write: [false],
    }),
  });
  public roleDialog: boolean;
  public roles: IRole[];
  public role: IRole;
  public selectedRoles: IRole[];
  public submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private roleService: RolesService
  ) {}

  ngOnInit(): void {
    this.roles = ROLES;
  }
  public openNew(): void {
    this.roleService.role.next(undefined);
    this.router.navigate([`create`], {
      relativeTo: this.activatedRoute,
    });
    // this.role = undefined;
    // this.submitted = false;
    // this.roleDialog = true;
    // this.resetForm();
  }

  // public deleteSelectedRoles() {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete the selected roles?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.roles = this.roles.filter(
  //         (val) => !this.selectedRoles.includes(val)
  //       );
  //       this.selectedRoles = null;
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Role Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }

  public editRole(role: IRole) {
    // this.role = role;
    this.roleService.role.next(role);
    this.router.navigate([`role/${role.id || 'create'}`], {
      relativeTo: this.activatedRoute,
    });
  }

  // public deleteRole(role: IRole) {
  //   this.confirmationService.confirm({
  //     message: 'Are you sure you want to delete ' + role.role + '?',
  //     header: 'Confirm',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this.roles = this.roles.filter((val) => val.role !== role.role);
  //       this.role = undefined;
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Role Deleted',
  //         life: 3000,
  //       });
  //     },
  //   });
  // }
}
