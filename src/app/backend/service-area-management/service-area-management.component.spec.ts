import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAreaManagementComponent } from './service-area-management.component';

describe('ServiceAreaManagementComponent', () => {
  let component: ServiceAreaManagementComponent;
  let fixture: ComponentFixture<ServiceAreaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAreaManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAreaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
