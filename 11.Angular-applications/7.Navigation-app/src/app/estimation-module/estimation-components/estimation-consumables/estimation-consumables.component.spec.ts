import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationConsumablesComponent } from './estimation-consumables.component';

describe('EstimationConsumablesComponent', () => {
  let component: EstimationConsumablesComponent;
  let fixture: ComponentFixture<EstimationConsumablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationConsumablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
