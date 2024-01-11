import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionNavComponent } from './production-nav.component';

describe('ProductionNavComponent', () => {
  let component: ProductionNavComponent;
  let fixture: ComponentFixture<ProductionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
