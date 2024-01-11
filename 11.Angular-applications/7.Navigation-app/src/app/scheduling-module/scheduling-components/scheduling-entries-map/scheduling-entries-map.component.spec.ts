import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingEntriesMapComponent } from './scheduling-entries-map.component';

describe('SchedulingEntriesMapComponent', () => {
  let component: SchedulingEntriesMapComponent;
  let fixture: ComponentFixture<SchedulingEntriesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingEntriesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingEntriesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
