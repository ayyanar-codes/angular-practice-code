import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollEsiPfComponent } from './payroll-esi-pf.component';

describe('PayrollEsiPfComponent', () => {
  let component: PayrollEsiPfComponent;
  let fixture: ComponentFixture<PayrollEsiPfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollEsiPfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollEsiPfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
