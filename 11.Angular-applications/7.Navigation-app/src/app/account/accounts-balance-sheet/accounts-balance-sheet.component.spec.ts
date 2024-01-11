import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsBalanceSheetComponent } from './accounts-balance-sheet.component';

describe('AccountsBalanceSheetComponent', () => {
  let component: AccountsBalanceSheetComponent;
  let fixture: ComponentFixture<AccountsBalanceSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsBalanceSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
