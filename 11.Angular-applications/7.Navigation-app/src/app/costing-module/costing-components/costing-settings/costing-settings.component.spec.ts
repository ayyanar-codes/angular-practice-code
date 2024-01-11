import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingSettingsComponent } from './costing-settings.component';

describe('CostingSettingsComponent', () => {
  let component: CostingSettingsComponent;
  let fixture: ComponentFixture<CostingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostingSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
