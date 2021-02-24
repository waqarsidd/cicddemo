import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceJobsComponent } from './service-jobs.component';

describe('ServiceJobsComponent', () => {
  let component: ServiceJobsComponent;
  let fixture: ComponentFixture<ServiceJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
