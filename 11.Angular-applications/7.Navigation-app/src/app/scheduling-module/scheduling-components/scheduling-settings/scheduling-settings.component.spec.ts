import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingSettingsComponent } from './scheduling-settings.component';

describe('SchedulingSettingsComponent', () => {
  let component: SchedulingSettingsComponent;
  let fixture: ComponentFixture<SchedulingSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
