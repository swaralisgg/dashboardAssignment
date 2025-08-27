import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account.model';
import { AccountService } from '../services/account-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  accounts: Account[] = [];
  ngOnInit(): void {
    this.accountService.getAccounts().subscribe(data => {
      this.accounts = data;
    });
  }
  }




