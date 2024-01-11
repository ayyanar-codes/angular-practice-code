import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionServiceRequestsComponent } from './production-service-requests.component';

describe('ProductionServiceRequestsComponent', () => {
  let component: ProductionServiceRequestsComponent;
  let fixture: ComponentFixture<ProductionServiceRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionServiceRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionServiceRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
