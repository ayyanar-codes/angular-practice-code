import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrelationshipNavComponent } from './customerrelationship-nav.component';

describe('CustomerrelationshipNavComponent', () => {
  let component: CustomerrelationshipNavComponent;
  let fixture: ComponentFixture<CustomerrelationshipNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrelationshipNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrelationshipNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
