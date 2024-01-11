import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrelationshipEntriesComponent } from './customerrelationship-entries.component';

describe('CustomerrelationshipEntriesComponent', () => {
  let component: CustomerrelationshipEntriesComponent;
  let fixture: ComponentFixture<CustomerrelationshipEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrelationshipEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrelationshipEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
