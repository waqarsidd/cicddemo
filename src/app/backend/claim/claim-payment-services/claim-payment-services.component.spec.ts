import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPaymentServicesComponent } from './claim-payment-services.component';

describe('ClaimPaymentServicesComponent', () => {
  let component: ClaimPaymentServicesComponent;
  let fixture: ComponentFixture<ClaimPaymentServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPaymentServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPaymentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
