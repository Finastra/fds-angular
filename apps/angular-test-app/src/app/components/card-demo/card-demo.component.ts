import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Account, AccountCardComponent, AccountCardSkeletonComponent } from '@finastra/angular-components/cards/account-card';
import { Subject } from 'rxjs';

@Component({
  selector: 'ffdc-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor, AccountCardComponent, AccountCardSkeletonComponent]
})
export class CardDemoComponent implements OnInit {
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
