import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingModelsComponent } from './costing-models.component';

describe('CostingModelsComponent', () => {
  let component: CostingModelsComponent;
  let fixture: ComponentFixture<CostingModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostingModelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
