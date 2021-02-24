import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddZipcodeComponent } from './add-zipcode.component';

describe('AddZipcodeComponent', () => {
  let component: AddZipcodeComponent;
  let fixture: ComponentFixture<AddZipcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddZipcodeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZipcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
