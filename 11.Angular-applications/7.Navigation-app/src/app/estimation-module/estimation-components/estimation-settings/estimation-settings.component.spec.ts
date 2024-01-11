import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationSettingsComponent } from './estimation-settings.component';

describe('EstimationSettingsComponent', () => {
  let component: EstimationSettingsComponent;
  let fixture: ComponentFixture<EstimationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
