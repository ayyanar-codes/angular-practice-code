import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionPurchaseRequestsComponent } from './production-purchase-requests.component';

describe('ProductionPurchaseRequestsComponent', () => {
  let component: ProductionPurchaseRequestsComponent;
  let fixture: ComponentFixture<ProductionPurchaseRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionPurchaseRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionPurchaseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
