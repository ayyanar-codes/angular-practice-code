import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationProcessesComponent } from './estimation-processes.component';

describe('EstimationProcessesComponent', () => {
  let component: EstimationProcessesComponent;
  let fixture: ComponentFixture<EstimationProcessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationProcessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
