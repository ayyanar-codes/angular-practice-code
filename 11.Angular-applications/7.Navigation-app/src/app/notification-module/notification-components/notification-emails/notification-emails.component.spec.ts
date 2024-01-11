import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationEmailsComponent } from './notification-emails.component';

describe('NotificationEmailsComponent', () => {
  let component: NotificationEmailsComponent;
  let fixture: ComponentFixture<NotificationEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationEmailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
