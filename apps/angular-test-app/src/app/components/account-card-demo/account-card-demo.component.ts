import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Account, AccountCardComponent, AccountCardSkeletonComponent } from '@finastra/angular-components/cards/account-card';
import { Subject } from 'rxjs';

@Component({
  selector: 'ffdc-account-card-demo',
  templateUrl: './account-card-demo.component.html',
  styleUrls: ['./account-card-demo.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, AccountCardComponent, AccountCardSkeletonComponent, AsyncPipe]
})
export class AccountCardDemoComponent implements OnInit {
  accounts: Account[] = [
    {
      name: 'France',
      currency: 'EUR',
      balance: 50000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'USA',
      currency: 'USD',
      balance: 750000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'UK',
      currency: 'GBP',
      balance: 80000,
      number: 'DE89 3704 0044 0532 0130 00'
    },
    {
      name: 'China',
      currency: 'CNY',
      balance: 70000,
      number: 'DE89 3704 0044 0532 0130 00'
    }
  ];
  accounts$ = new Subject();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.accounts$.next(this.accounts);
    }, 1500);
  }
}
