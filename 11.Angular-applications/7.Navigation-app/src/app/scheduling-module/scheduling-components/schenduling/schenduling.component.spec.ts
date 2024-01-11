import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchendulingComponent } from './schenduling.component';

describe('SchendulingComponent', () => {
  let component: SchendulingComponent;
  let fixture: ComponentFixture<SchendulingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchendulingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchendulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
