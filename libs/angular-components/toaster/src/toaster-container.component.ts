import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';

import { NgFor } from '@angular/common';
import { ToasterComponent } from './toaster.component';
import { Toast } from './toaster.model';

const voidState = style({
  transform: 'translateX(110%)',
  height: 0,
  marginLeft: '0',
  marginRight: '0'
});

@Component({
  selector: 'uxg-toaster-container',
  template: ` <uxg-toaster [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></uxg-toaster> `,
  animations: [trigger('fadeIn', [transition(':enter', [voidState, animate(100)]), transition(':leave', [animate(100, voidState)])])],
  imports: [NgFor, ToasterComponent]
})
export class ToasterContainerComponent implements OnInit, OnDestroy {
  @Input()
  content: Toast[] = [];

  @ViewChildren(ToasterComponent)
  toasts!: QueryList<ToasterComponent>;

  fadeIn: any;

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}
}
