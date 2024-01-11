import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesShippingComponent } from './sales-shipping.component';

describe('SalesShippingComponent', () => {
  let component: SalesShippingComponent;
  let fixture: ComponentFixture<SalesShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesShippingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
