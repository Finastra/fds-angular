import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NavigationNode } from './services/navigation.model';

@Component({
    selector: 'uxg-global-nav',
    templateUrl: './global-nav.component.html',
    styleUrls: ['./global-nav.component.scss'],
    host: {
        class: 'uxg-global-nav'
    },
    imports: [MatSidenavModule, SidenavComponent, NavbarComponent, NgTemplateOutlet]
})
export class GlobalNavComponent implements OnInit, OnDestroy {
  @Input() appName!: string;
  @Input() shortName!: string;
  @Input() navigationNodes!: NavigationNode[];
  @Input() activeRoute!: string;
  @Input() currentNode!: NavigationNode;
  @Input() brandIcon: string | undefined;
  @Input() appContent!: TemplateRef<any>;
  @Input() navbarAction!: TemplateRef<any>;
  @Input() headerTitle!: string;

  @Output() menuClick = new EventEmitter<void>();
  @Output() brandAction = new EventEmitter<any>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();
  @Output() logout = new EventEmitter<void>();

  currentRoute = new ReplaySubject<string>();

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((currentRoute) => {
      const route = (currentRoute as NavigationEnd).url;
      this.currentRoute.next(route);
    });
  }

  ngOnInit() {
    if (!this.currentNode) {
      this.currentRoute.subscribe((currentRoute: string) => {
        const currentNode = this.navigationNodes.find((node) => node.path === currentRoute.replace(/\//g, ''));
        if (currentNode) {
          this.currentNode = currentNode;
          this.activeRoute = currentRoute;
        }
      });
    }
  }

  ngOnDestroy() {}
}
