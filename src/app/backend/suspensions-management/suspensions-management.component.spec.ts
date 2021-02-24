import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspensionsManagementComponent } from './suspensions-management.component';

describe('SuspensionsManagementComponent', () => {
  let component: SuspensionsManagementComponent;
  let fixture: ComponentFixture<SuspensionsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuspensionsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspensionsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
