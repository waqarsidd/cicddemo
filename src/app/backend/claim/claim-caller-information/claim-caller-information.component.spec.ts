import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCallerInformationComponent } from './claim-caller-information.component';

describe('ClaimCallerInformationComponent', () => {
  let component: ClaimCallerInformationComponent;
  let fixture: ComponentFixture<ClaimCallerInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimCallerInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimCallerInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
