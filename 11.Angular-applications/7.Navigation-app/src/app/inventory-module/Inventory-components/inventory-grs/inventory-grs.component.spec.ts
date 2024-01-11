import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGrsComponent } from './inventory-grs.component';

describe('InventoryGrsComponent', () => {
  let component: InventoryGrsComponent;
  let fixture: ComponentFixture<InventoryGrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryGrsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
