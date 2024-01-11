import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLedgersComponent } from './accounts-ledgers.component';

describe('AccountsLedgersComponent', () => {
  let component: AccountsLedgersComponent;
  let fixture: ComponentFixture<AccountsLedgersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsLedgersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
