import { animate, state, style, transition, trigger } from '@angular/animations';
import { isPlatformBrowser, NgTemplateOutlet, AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, Inject, Input, OnDestroy, PLATFORM_ID, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { distinctUntilChanged, map, share, throttleTime } from 'rxjs/operators';
import * as smoothscroll from 'smoothscroll-polyfill';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

enum ShowStatus {
  show = 'show',
  hide = 'hide'
}
@Component({
  selector: 'uxg-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: 'scale(1)' })),
      state('hide', style({ opacity: 0, transform: 'scale(0)' })),
      transition('show => hide', animate('350ms ease-out')),
      transition('hide => show', animate('350ms ease-in'))
    ])
  ],
  imports: [NgTemplateOutlet, MatButtonModule, MatIconModule, AsyncPipe]
})
export class ScrollToTopComponent implements AfterViewInit, OnDestroy {
  @Input() customTemplate?: TemplateRef<any>;
  @Input() showAfter = 500;
  @Input() parentElementSelector?: string;

  showButton = false;
  scroll$: Subscription = Subscription.EMPTY;
  state$ = new BehaviorSubject<string>(ShowStatus.hide);
  parent: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      smoothscroll.polyfill();
      if (this.parentElementSelector) {
        this.parent = document.querySelector(this.parentElementSelector);
      } else {
        this.parent = window;
      }
      this.scroll$ = fromEvent(this.parent, 'scroll')
        .pipe(
          throttleTime(10),
          map(() => this.parent.pageYOffset || this.parent.scrollTop),
          map((y) => {
            if (y > this.showAfter) {
              return ShowStatus.show;
            } else {
              return ShowStatus.hide;
            }
          }),
          distinctUntilChanged(),
          share()
        )
        .subscribe((s) => this.state$.next(s));
    }
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe();
  }

  onClick() {
    this.parent.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
