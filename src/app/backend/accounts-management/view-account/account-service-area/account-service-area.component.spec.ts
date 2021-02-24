import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountServiceAreaComponent } from './account-service-area.component';

describe('AccountServiceAreaComponent', () => {
  let component: AccountServiceAreaComponent;
  let fixture: ComponentFixture<AccountServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountServiceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
