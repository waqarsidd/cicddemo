import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimClientInformationComponent } from './claim-client-information.component';

describe('ClaimClientInformationComponent', () => {
  let component: ClaimClientInformationComponent;
  let fixture: ComponentFixture<ClaimClientInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimClientInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimClientInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
