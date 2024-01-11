import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSmsComponent } from './notification-sms.component';

describe('NotificationSmsComponent', () => {
  let component: NotificationSmsComponent;
  let fixture: ComponentFixture<NotificationSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
