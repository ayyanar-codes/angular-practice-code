import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEmployeesComponent } from './payroll-employees.component';

describe('PayrollEmployeesComponent', () => {
  let component: PayrollEmployeesComponent;
  let fixture: ComponentFixture<PayrollEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
