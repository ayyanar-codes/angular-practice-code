import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationChannelsComponent } from './notification-channels.component';

describe('NotificationChannelsComponent', () => {
  let component: NotificationChannelsComponent;
  let fixture: ComponentFixture<NotificationChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
