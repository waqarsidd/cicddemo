import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimInsuranceInformationComponent } from './claim-insurance-information.component';

describe('ClaimInsuranceInformationComponent', () => {
  let component: ClaimInsuranceInformationComponent;
  let fixture: ComponentFixture<ClaimInsuranceInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimInsuranceInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimInsuranceInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
