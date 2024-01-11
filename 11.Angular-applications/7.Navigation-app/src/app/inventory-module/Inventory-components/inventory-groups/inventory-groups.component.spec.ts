import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryGroupsComponent } from './inventory-groups.component';

describe('InventoryGroupsComponent', () => {
  let component: InventoryGroupsComponent;
  let fixture: ComponentFixture<InventoryGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
