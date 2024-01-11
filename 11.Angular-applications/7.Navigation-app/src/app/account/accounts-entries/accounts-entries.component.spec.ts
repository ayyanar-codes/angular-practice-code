import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsEntriesComponent } from './accounts-entries.component';

describe('AccountsEntriesComponent', () => {
  let component: AccountsEntriesComponent;
  let fixture: ComponentFixture<AccountsEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
