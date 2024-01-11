import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryEntriesComponent } from './inventory-entries.component';

describe('InventoryEntriesComponent', () => {
  let component: InventoryEntriesComponent;
  let fixture: ComponentFixture<InventoryEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
