import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsManagementComponent } from './contacts-management.component';

describe('ContactsManagementComponent', () => {
  let component: ContactsManagementComponent;
  let fixture: ComponentFixture<ContactsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
