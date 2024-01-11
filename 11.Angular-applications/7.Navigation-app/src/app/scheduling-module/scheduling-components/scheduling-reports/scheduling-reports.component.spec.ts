import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingReportsComponent } from './scheduling-reports.component';

describe('SchedulingReportsComponent', () => {
  let component: SchedulingReportsComponent;
  let fixture: ComponentFixture<SchedulingReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
