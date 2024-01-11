import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrelationshipReportsComponent } from './customerrelationship-reports.component';

describe('CustomerrelationshipReportsComponent', () => {
  let component: CustomerrelationshipReportsComponent;
  let fixture: ComponentFixture<CustomerrelationshipReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrelationshipReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrelationshipReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
