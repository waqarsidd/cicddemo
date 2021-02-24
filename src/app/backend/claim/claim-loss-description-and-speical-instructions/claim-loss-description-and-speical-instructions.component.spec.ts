import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimLossDescriptionAndSpeicalInstructionsComponent } from './claim-loss-description-and-speical-instructions.component';

describe('ClaimLossDescriptionAndSpeicalInstructionsComponent', () => {
  let component: ClaimLossDescriptionAndSpeicalInstructionsComponent;
  let fixture: ComponentFixture<ClaimLossDescriptionAndSpeicalInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimLossDescriptionAndSpeicalInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimLossDescriptionAndSpeicalInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
