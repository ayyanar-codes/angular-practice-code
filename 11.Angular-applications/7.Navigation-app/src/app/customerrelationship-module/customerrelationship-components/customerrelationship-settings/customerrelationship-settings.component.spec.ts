import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrelationshipSettingsComponent } from './customerrelationship-settings.component';

describe('CustomerrelationshipSettingsComponent', () => {
  let component: CustomerrelationshipSettingsComponent;
  let fixture: ComponentFixture<CustomerrelationshipSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrelationshipSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrelationshipSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
