import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IRole } from '@app/models/role';
import { RolesService } from '@app/services/roles.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
})
export class RoleComponent {
  @ViewChild('roleForm') roleForm: FormGroupDirective;
  public role: IRole;
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
  public roles: IRole[];
  public submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private roleService: RolesService
  ) {
    setTimeout(() => {
      this.handleRole();
    }, 500);
  }

  public navigateBack() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  public handleRole() {
    const role = this.roleService.role.value;
    if (!role) {
      return;
    }
    this.role = role;
    this.formGroup.setValue({
      role: role.role,
      description: role.description,
      users: {
        write: role.permissions.users.write,
        read: role.permissions.users.read,
        create: role.permissions.users.create,
      },
      clients: {
        write: role.permissions.clients.write,
        read: role.permissions.clients.read,
        create: role.permissions.clients.create,
      },
      contractors: {
        write: role.permissions.contractors.write,
        read: role.permissions.contractors.read,
        create: role.permissions.contractors.create,
      },
    });
  }

  public onSubmit() {
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    const values = this.formGroup.value;
    const data = {
      role: values.role,
      description: values.description,
      permissions: {
        users: {
          read: values.users.read,
          write: values.users.write,
          create: values.users.create,
        },
        clients: {
          read: values.clients.read,
          write: values.clients.write,
          create: values.clients.create,
        },
        contractors: {
          read: values.contractors.read,
          write: values.contractors.write,
          create: values.contractors.create,
        },
      },
    };
    if (!this.role || !this.role.id) {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Role Created',
        life: 3000,
      });
    } else {
      this.messageService.add({
        severity: 'success',
        summary: 'Successful',
        detail: 'Role Updated',
        life: 3000,
      });
    }
    this.resetForm();
    this.navigateBack();
    this.role = undefined;
  }

  private resetForm() {
    this.formGroup.setValue({
      role: ['', Validators.required],
      description: [''],
      users: {
        read: [false],
        create: [false],
        write: [false],
      },
      clients: {
        read: [false],
        create: [false],
        write: [false],
      },
      contractors: {
        read: [false],
        create: [false],
        write: [false],
      },
    });
    this.formGroup.reset();
    this.roleService.role.next(undefined);
  }
}
