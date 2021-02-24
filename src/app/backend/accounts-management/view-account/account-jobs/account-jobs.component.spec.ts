import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountJobsComponent } from './account-jobs.component';

describe('AccountJobsComponent', () => {
  let component: AccountJobsComponent;
  let fixture: ComponentFixture<AccountJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
