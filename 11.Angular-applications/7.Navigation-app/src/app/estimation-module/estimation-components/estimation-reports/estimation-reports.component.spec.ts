import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationReportsComponent } from './estimation-reports.component';

describe('EstimationReportsComponent', () => {
  let component: EstimationReportsComponent;
  let fixture: ComponentFixture<EstimationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
