import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrls: ['./two-factor-auth.component.scss'],
  providers: [MessageService],
})
export class TwoFactorAuthComponent implements OnInit {
  twoFactorAuth: FormGroup;

  submitted: boolean;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.twoFactorAuth = this.fb.group({
      'auth-code': new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Login Successfully',
      sticky: true,
    });
  }
}
