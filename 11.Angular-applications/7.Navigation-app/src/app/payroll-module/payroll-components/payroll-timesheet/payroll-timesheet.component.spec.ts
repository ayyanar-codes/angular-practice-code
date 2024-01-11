import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollTimesheetComponent } from './payroll-timesheet.component';

describe('PayrollTimesheetComponent', () => {
  let component: PayrollTimesheetComponent;
  let fixture: ComponentFixture<PayrollTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
