import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingNavComponent } from './costing-nav.component';

describe('CostingNavComponent', () => {
  let component: CostingNavComponent;
  let fixture: ComponentFixture<CostingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostingNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
