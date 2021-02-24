import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSuspensionsComponent } from './account-suspensions.component';

describe('AccountSuspensionsComponent', () => {
  let component: AccountSuspensionsComponent;
  let fixture: ComponentFixture<AccountSuspensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSuspensionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSuspensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
