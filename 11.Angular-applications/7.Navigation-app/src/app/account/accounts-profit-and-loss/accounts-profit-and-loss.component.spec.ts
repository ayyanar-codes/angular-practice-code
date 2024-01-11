import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsProfitAndLossComponent } from './accounts-profit-and-loss.component';

describe('AccountsProfitAndLossComponent', () => {
  let component: AccountsProfitAndLossComponent;
  let fixture: ComponentFixture<AccountsProfitAndLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsProfitAndLossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsProfitAndLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
