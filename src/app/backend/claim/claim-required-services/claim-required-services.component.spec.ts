import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRequiredServicesComponent } from './claim-required-services.component';

describe('ClaimRequiredServicesComponent', () => {
  let component: ClaimRequiredServicesComponent;
  let fixture: ComponentFixture<ClaimRequiredServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimRequiredServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimRequiredServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
