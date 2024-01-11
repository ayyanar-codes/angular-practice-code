import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationModelsComponent } from './estimation-models.component';

describe('EstimationModelsComponent', () => {
  let component: EstimationModelsComponent;
  let fixture: ComponentFixture<EstimationModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
