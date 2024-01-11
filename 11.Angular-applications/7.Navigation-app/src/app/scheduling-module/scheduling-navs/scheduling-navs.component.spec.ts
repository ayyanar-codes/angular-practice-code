import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingNavsComponent } from './scheduling-navs.component';

describe('SchedulingNavsComponent', () => {
  let component: SchedulingNavsComponent;
  let fixture: ComponentFixture<SchedulingNavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingNavsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingNavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
