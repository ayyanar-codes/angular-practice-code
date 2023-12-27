import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationAndCostingComponent } from './estimation-and-costing.component';

describe('EstimationAndCostingComponent', () => {
  let component: EstimationAndCostingComponent;
  let fixture: ComponentFixture<EstimationAndCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationAndCostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationAndCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
