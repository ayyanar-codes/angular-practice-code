import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryConsumptionsComponent } from './inventory-consumptions.component';

describe('InventoryConsumptionsComponent', () => {
  let component: InventoryConsumptionsComponent;
  let fixture: ComponentFixture<InventoryConsumptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryConsumptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryConsumptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
