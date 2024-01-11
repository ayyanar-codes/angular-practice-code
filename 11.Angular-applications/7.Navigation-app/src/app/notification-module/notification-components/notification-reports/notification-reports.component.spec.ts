import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationReportsComponent } from './notification-reports.component';

describe('NotificationReportsComponent', () => {
  let component: NotificationReportsComponent;
  let fixture: ComponentFixture<NotificationReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
