import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOpeningComponent } from './inventory-opening.component';

describe('InventoryOpeningComponent', () => {
  let component: InventoryOpeningComponent;
  let fixture: ComponentFixture<InventoryOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOpeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
