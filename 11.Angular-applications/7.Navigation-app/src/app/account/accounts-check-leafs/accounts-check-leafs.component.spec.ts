import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCheckLeafsComponent } from './accounts-check-leafs.component';

describe('AccountsCheckLeafsComponent', () => {
  let component: AccountsCheckLeafsComponent;
  let fixture: ComponentFixture<AccountsCheckLeafsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsCheckLeafsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsCheckLeafsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
