import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationRawMaterialsComponent } from './estimation-raw-materials.component';

describe('EstimationRawMaterialsComponent', () => {
  let component: EstimationRawMaterialsComponent;
  let fixture: ComponentFixture<EstimationRawMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationRawMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationRawMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
