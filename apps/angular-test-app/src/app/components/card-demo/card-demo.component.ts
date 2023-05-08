import { AsyncPipe, CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Account, AccountCardComponent, AccountCardSkeletonComponent } from '@finastra/angular-components/cards/account-card';
import { Subject } from 'rxjs';

const DATA = {
  accountId: '10020',
  accountType: 'CHK',
  nickname: 'My account',
  formattedAccountNumber: '(...6001)',
  accountNumber: '0000006001-DDA',
  alternateAccountNumber: '0000006001',
  isAsset: true,
  isLiability: false,
  branchNumber: '1',
  ownerName: null,
  openDate: null,
  balances: [
    {
      type: 'available',
      amount: 19721.64
    },
    {
      type: 'current',
      amount: 19721.64
    }
  ],
  details: [
    {
      label: "Today's beginning Balance",
      value: '19721.64'
    },
    {
      label: 'Available Balance',
      value: '$19,721.64'
    },
    {
      label: 'Interest Paid Year to Date',
      value: '$0.00'
    },
    {
      label: 'Interest Paid Last Year',
      value: '$0.00'
    },
    {
      label: 'Hold Balance',
      value: '.00'
    },
    {
      label: 'Current Balance',
      value: '$19,721.64'
    }
  ]
};

const ACTIONS = [
  {
    icon: 'dialpad',
    title: 'Redial'
  },
  {
    icon: 'voicemail',
    title: 'Check voice mail'
  },
  {
    icon: 'notifications_off',
    title: 'Disable alerts'
  }
];

const DATA_2 = [
  {
    id: '123',
    number: 'Xxxx-xxxxxx-43212',
    type: 'CURRENT',
    format: 'BBAN',
    currency: 'USD',
    country: 'US',
    status: 'ACTIVE',
    customerReference: '34564',
    interestRate: '20.54',
    debitInterestRate: '20.54',
    creditInterestRate: '20.54',
    principalAmount: '5877.78',
    maturityAmount: '5877.78',
    accountStartDate: '2019-07-01',
    accountEndDate: '2019-07-01',
    bankShortName: 'CITI',
    overDraftLimit: '10000.00'
  },
  {
    id: '123',
    number: 'Xxxx-xxxxxx-43213',
    type: 'DEPOSIT',
    format: 'BBAN',
    currency: 'USD',
    country: 'US',
    status: 'ACTIVE',
    customerReference: '34564',
    interestRate: '20.54',
    debitInterestRate: '20.54',
    creditInterestRate: '20.54',
    principalAmount: '5877.78',
    maturityAmount: '5877.78',
    accountStartDate: '2019-07-01',
    accountEndDate: '2019-07-01',
    bankShortName: 'CITI',
    overDraftLimit: '10000.00'
  },
  {
    id: '123',
    number: 'Xxxx-xxxxxx-43214',
    type: 'SAVINGS',
    format: 'BBAN',
    currency: 'USD',
    country: 'US',
    status: 'ACTIVE',
    customerReference: '34564',
    interestRate: '20.54',
    debitInterestRate: '20.54',
    creditInterestRate: '20.54',
    principalAmount: '5877.78',
    maturityAmount: '5877.78',
    accountStartDate: '2019-07-01',
    accountEndDate: '2019-07-01',
    bankShortName: 'CITI',
    overDraftLimit: '10000.00'
  },
  {
    id: '123',
    number: 'Xxxx-xxxxxx-43215',
    type: 'LOAN',
    format: 'BBAN',
    currency: 'USD',
    country: 'US',
    status: 'ACTIVE',
    customerReference: '34564',
    interestRate: '20.54',
    debitInterestRate: '20.54',
    creditInterestRate: '20.54',
    principalAmount: '5877.78',
    maturityAmount: '5877.78',
    accountStartDate: '2019-07-01',
    accountEndDate: '2019-07-01',
    bankShortName: 'CITI',
    overDraftLimit: '10000.00'
  },
  {
    id: '123',
    number: 'Xxxx-xxxxxx-43216',
    type: 'CREDIT-CARD',
    format: 'BBAN',
    currency: 'USD',
    country: 'US',
    status: 'ACTIVE',
    customerReference: '34564',
    interestRate: '20.54',
    debitInterestRate: '20.54',
    creditInterestRate: '20.54',
    principalAmount: '5877.78',
    maturityAmount: '5877.78',
    accountStartDate: '2019-07-01',
    accountEndDate: '2019-07-01',
    bankShortName: 'CITI',
    overDraftLimit: '10000.00'
  }
];

@Component({
  selector: 'ffdc-card-demo',
  templateUrl: './card-demo.component.html',
  styleUrls: ['./card-demo.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    AccountCardComponent,
    AccountCardSkeletonComponent,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    CurrencyPipe,
    MatIconModule,
    MatButtonModule
  ]
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

  account = DATA;

  gridAccounts = DATA_2;
  actions = ACTIONS;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.accounts$.next(this.accounts);
    }, 1500);
  }
}
