import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimPolicyInformationComponent } from './claim-policy-information.component';

describe('ClaimPolicyInformationComponent', () => {
  let component: ClaimPolicyInformationComponent;
  let fixture: ComponentFixture<ClaimPolicyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimPolicyInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimPolicyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
