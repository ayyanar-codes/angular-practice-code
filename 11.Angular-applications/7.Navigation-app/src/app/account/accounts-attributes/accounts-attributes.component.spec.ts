import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAttributesComponent } from './accounts-attributes.component';

describe('AccountsAttributesComponent', () => {
  let component: AccountsAttributesComponent;
  let fixture: ComponentFixture<AccountsAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
