import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimLossAndPolicyInformationComponent } from './claim-loss-and-policy-information.component';

describe('ClaimLossAndPolicyInformationComponent', () => {
  let component: ClaimLossAndPolicyInformationComponent;
  let fixture: ComponentFixture<ClaimLossAndPolicyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimLossAndPolicyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimLossAndPolicyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
