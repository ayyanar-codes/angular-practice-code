import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsReportsComponent } from './accounts-reports.component';

describe('AccountsReportsComponent', () => {
  let component: AccountsReportsComponent;
  let fixture: ComponentFixture<AccountsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
