import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDirectiveComponent } from './comp-directive.component';

describe('CompDirectiveComponent', () => {
  let component: CompDirectiveComponent;
  let fixture: ComponentFixture<CompDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
