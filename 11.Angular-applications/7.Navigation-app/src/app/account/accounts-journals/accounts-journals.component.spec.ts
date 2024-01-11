import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsJournalsComponent } from './accounts-journals.component';

describe('AccountsJournalsComponent', () => {
  let component: AccountsJournalsComponent;
  let fixture: ComponentFixture<AccountsJournalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsJournalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
