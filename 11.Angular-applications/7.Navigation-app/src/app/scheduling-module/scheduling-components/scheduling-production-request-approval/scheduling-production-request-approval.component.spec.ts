import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingProductionRequestApprovalComponent } from './scheduling-production-request-approval.component';

describe('SchedulingProductionRequestApprovalComponent', () => {
  let component: SchedulingProductionRequestApprovalComponent;
  let fixture: ComponentFixture<SchedulingProductionRequestApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingProductionRequestApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingProductionRequestApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
