import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimJobAddressInformationComponent } from './claim-job-address-information.component';

describe('ClaimJobAddressInformationComponent', () => {
  let component: ClaimJobAddressInformationComponent;
  let fixture: ComponentFixture<ClaimJobAddressInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimJobAddressInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimJobAddressInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
