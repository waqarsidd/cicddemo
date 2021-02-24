import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceAreaComponent } from './view-service-area.component';

describe('ViewServiceAreaComponent', () => {
  let component: ViewServiceAreaComponent;
  let fixture: ComponentFixture<ViewServiceAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
