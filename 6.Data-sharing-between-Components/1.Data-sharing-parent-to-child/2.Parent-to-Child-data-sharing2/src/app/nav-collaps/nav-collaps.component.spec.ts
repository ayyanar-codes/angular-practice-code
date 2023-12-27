import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCollapsComponent } from './nav-collaps.component';

describe('NavCollapsComponent', () => {
  let component: NavCollapsComponent;
  let fixture: ComponentFixture<NavCollapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCollapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCollapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
