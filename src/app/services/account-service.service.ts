import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountsSubject = new BehaviorSubject<Account[]>([
    { accountName: 'Virtual Wallet(CAD)', accountNumber: '****1234', balance: 1500, currency: 'USD',virtualWallet : true },
    { accountName: 'Virtual Wallet(CAD)', accountNumber: '****5678', balance: 8200, currency: 'USD',virtualWallet : true  },
    { accountName: 'ACH Debit Account', accountNumber: '****9876', balance: 12500, currency: 'USD',virtualWallet : false }
  ]);

  getAccounts(): Observable<Account[]> {
    return this.accountsSubject.asObservable();
  }
}