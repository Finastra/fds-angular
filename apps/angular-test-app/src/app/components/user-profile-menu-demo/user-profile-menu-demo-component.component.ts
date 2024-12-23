import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {
  UserProfile,
  UxgUserProfileMenuComponent,
  UxgUserProfilePanelActionsDirective,
  UxgUserProfilePanelContentDirective,
  UxgUserProfilePanelDetailsDirective
} from '@finastra/angular-components/user-profile-menu';
@Component({
  selector: 'uxg-user-profile-menu-demo',
  templateUrl: './user-profile-menu-demo-component.component.html',
  styleUrls: ['./user-profile-menu-demo-component.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    UxgUserProfileMenuComponent,
    UxgUserProfilePanelActionsDirective,
    MatButtonModule,
    MatIconModule,
    UxgUserProfilePanelDetailsDirective,
    UxgUserProfilePanelContentDirective,
    MatMenuModule
  ]
})
export class UserProfileMenuDemoComponentComponent implements OnInit {
  vinh: UserProfile = {
    username: 'Nguyen Thai Vinh',
    email: 'thaivinh.nguyen@finastra.com'
  };

  user0: UserProfile = {
    username: 'User 0',
    email: 'user0@finastra.com'
  };

  razvan: UserProfile = {
    username: 'Bordeanu Razvan',
    email: 'Razvan.Bordeanu@finastra.com',
    gravatarEmail: 'razvan.bordeanu@gmail.com'
  };

  thomas: UserProfile = {
    username: 'Talbot Thomas',
    email: 'thomas.talbot@finastra.com',
    gravatarEmail: 'thomas.talbot@gmail.com'
  };

  user1: UserProfile = {
    username: 'User 1',
    email: 'user1@gmail.com',
    photo: 'https://randomuser.me/api/portraits/men/5.jpg',
    gravatarEmail: 'default'
  };

  user2: UserProfile = {
    username: 'User 2',
    email: 'user2@gmail.com',
    photo: 'https://randomuser.me/api/portraits/women/17.jpg',
    gravatarEmail: 'default'
  };

  constructor() {}

  ngOnInit(): void {}
}
