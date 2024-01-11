import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionEntiresComponent } from './production-entires.component';

describe('ProductionEntiresComponent', () => {
  let component: ProductionEntiresComponent;
  let fixture: ComponentFixture<ProductionEntiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionEntiresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionEntiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
