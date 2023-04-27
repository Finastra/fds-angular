import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT, NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollToTopComponent } from '@finastra/angular-components/scroll-to-top';
import { nestedRoutes } from './nested-routes';

const darkThemeLSName = 'darkTheme';

@Component({
  selector: 'ffdc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatSidenavModule,
    MatSlideToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    NgFor,
    NgIf,
    ScrollToTopComponent
  ]
})
export class AppComponent implements OnInit {
  title = '';
  dark = false;
  nestedRoutes = nestedRoutes;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private _overlayContainer: OverlayContainer
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.title = this.route.root.firstChild ? this.route.root.firstChild.snapshot.data['title'] : '';
      }
    });
  }

  ngOnInit() {
    const darkTheme = this.getDarkThemeValue();
    this.dark = darkTheme;
    this.setTheme(darkTheme);
  }

  toggleTheme() {
    const darkTheme = this.getDarkThemeValue();
    this.dark = !darkTheme;

    localStorage.setItem(darkThemeLSName, this.dark.toString());

    this.setTheme(this.dark);
  }

  getDarkThemeValue(): boolean {
    return localStorage.getItem(darkThemeLSName) === 'true';
  }

  setTheme(dark: boolean) {
    const darkThemeClass = 'uxg-dark-theme';

    if (dark) {
      this.renderer.addClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this.renderer.removeClass(this.document.body, darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
