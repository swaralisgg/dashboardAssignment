export interface Account {
    accountName: string;
    accountNumber: string; // e.g. masked "****1234"
    balance: number;
    currency: string;
    virtualWallet : boolean
  }