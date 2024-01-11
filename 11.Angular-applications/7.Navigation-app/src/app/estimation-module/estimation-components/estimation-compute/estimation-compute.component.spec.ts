import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationComputeComponent } from './estimation-compute.component';

describe('EstimationComputeComponent', () => {
  let component: EstimationComputeComponent;
  let fixture: ComponentFixture<EstimationComputeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationComputeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationComputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
