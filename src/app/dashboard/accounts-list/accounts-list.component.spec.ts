import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AccountsListComponent } from './accounts-list.component';
import { AccountService } from '../../services/account-service.service';
import { Account } from '../../models/account.model'; // ✅ import your model

describe('AccountsListComponent', () => {
  let component: AccountsListComponent;
  let fixture: ComponentFixture<AccountsListComponent>;
  let accountServiceMock: jest.Mocked<AccountService>;

  beforeEach(async () => {
    // Mock the service
    accountServiceMock = {
      getAccounts: jest.fn()
    } as unknown as jest.Mocked<AccountService>;

    await TestBed.configureTestingModule({
      declarations: [AccountsListComponent],
      providers: [{ provide: AccountService, useValue: accountServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsListComponent);
    component = fixture.componentInstance;
  });

  it('should fetch accounts on init', () => {
    // Arrange - fake data matching your Account model
    const mockAccounts: Account[] = [
      {
        accountName: 'Savings Account',
        accountNumber: '****1234',
        balance: 5000,
        currency: 'USD',
        virtualWallet: false
      },
      {
        accountName: 'Virtual Wallet',
        accountNumber: '****5678',
        balance: 200,
        currency: 'USD',
        virtualWallet: true
      }
    ];
    accountServiceMock.getAccounts.mockReturnValue(of(mockAccounts));

    // Act
    component.ngOnInit();

    // Assert
    expect(accountServiceMock.getAccounts).toHaveBeenCalledTimes(1);
    expect(component.accounts).toEqual(mockAccounts);
  });

  it('should handle empty accounts', () => {
    // Arrange
    const mockAccounts: Account[] = [];
    accountServiceMock.getAccounts.mockReturnValue(of(mockAccounts));

    // Act
    component.ngOnInit();

    // Assert
    expect(component.accounts.length).toBe(0);
  });
});


