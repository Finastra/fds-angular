import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppBarComponent } from '@finastra/angular-components/app-bar';
import { Breadcrumb, UxgBreadcrumbComponent } from '@finastra/angular-components/breadcrumb';
import { UserProfile, UxgUserProfileMenuComponent } from '@finastra/angular-components/user-profile-menu';


@Component({
  selector: 'ffdc-app-bar-demo',
  templateUrl: './app-bar-demo.component.html',
  styleUrls: ['./app-bar-demo.component.scss'],
  standalone: true,
  imports: [
    AppBarComponent,
    MatIconModule,
    UxgUserProfileMenuComponent,
    UxgBreadcrumbComponent,
  ]
})
export class AppBarDemoComponent {
  constructor() {}
  appName = 'Super App';
  user0: UserProfile = {
    username: 'User 0',
    email: 'user0@finastra.com'
  };
  defaultBreadcrumbsWithoutMenu: Breadcrumb[] = [
    {
      label: 'Design System',
      url: '/',
      itemClass: 'uxg-h6'
    },
    {
      label: 'Foundations',
      url: '/foundations'
    },
    {
      label: 'Icons',
      url: '/foundations'
    }
  ];
}
