import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { AvatarColor, AvatarComponent, DefaultGravatar } from '@finastra/angular-components/avatar';
import { HeaderType } from './header-type';
import { UserProfile } from './user-profile';
import { UxgUserProfilePanelActionsDirective } from './user-profile-panel-actions.directive';
import { UxgUserProfilePanelContentDirective } from './user-profile-panel-content.directive';
import { UxgUserProfilePanelDetailsDirective } from './user-profile-panel-details.directive';
import { UxgUserProfilePanelComponent } from './user-profile-panel.component';
@Component({
    selector: 'uxg-user-profile-menu',
    templateUrl: './user-profile-menu.component.html',
    styleUrls: ['./user-profile-menu.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'uxg-user-profile-menu'
    },
    imports: [AvatarComponent, MatMenuModule, UxgUserProfilePanelComponent]
})
export class UxgUserProfileMenuComponent {
  @Input() user!: UserProfile;
  @Input() defaultGravatar: DefaultGravatar | undefined;
  @Input() color: AvatarColor = 'gradient';
  @Input() headerType: HeaderType = 'title';

  @ViewChild('avatarImage', { read: TemplateRef, static: true })
  avatarImage!: TemplateRef<any>;

  @ViewChild(MatMenuTrigger, { static: true })
  userMenuTrigger!: MatMenuTrigger;

  @ContentChild(UxgUserProfilePanelContentDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelContent: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelActionsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelActions: TemplateRef<any> | undefined;

  @ContentChild(UxgUserProfilePanelDetailsDirective, { read: TemplateRef, static: true })
  uxgUserProfilePanelDetails: TemplateRef<any> | undefined;

  constructor(@Attribute('dense') public dense: any) {}
}
