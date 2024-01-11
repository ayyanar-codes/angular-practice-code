import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesNavComponent } from './sales-nav.component';

describe('SalesNavComponent', () => {
  let component: SalesNavComponent;
  let fixture: ComponentFixture<SalesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
