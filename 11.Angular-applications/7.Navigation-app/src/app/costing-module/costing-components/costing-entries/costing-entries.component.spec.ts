import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingEntriesComponent } from './costing-entries.component';

describe('CostingEntriesComponent', () => {
  let component: CostingEntriesComponent;
  let fixture: ComponentFixture<CostingEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostingEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostingEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
