import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCustomerInformationComponent } from './claim-customer-information.component';

describe('ClaimCustomerInformationComponent', () => {
  let component: ClaimCustomerInformationComponent;
  let fixture: ComponentFixture<ClaimCustomerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCustomerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimCustomerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
