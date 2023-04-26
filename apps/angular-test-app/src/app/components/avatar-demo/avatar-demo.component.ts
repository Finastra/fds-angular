import { Component } from '@angular/core';
import { AvatarListComponent } from '../../../../../../libs/angular-components/avatar/src/avatar-list.component';
import { AvatarComponent, UxgImageAvatar } from '../../../../../../libs/angular-components/avatar/src/avatar.component';

@Component({
    selector: 'ffdc-avatar-demo',
    templateUrl: './avatar-demo.component.html',
    styleUrls: ['./avatar-demo.component.scss'],
    standalone: true,
    imports: [AvatarComponent, UxgImageAvatar, AvatarListComponent]
})
export class AvatarDemoComponent {
  constructor() {}
}
