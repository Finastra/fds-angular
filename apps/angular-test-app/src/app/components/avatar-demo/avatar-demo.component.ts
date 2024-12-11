import { Component } from '@angular/core';
import { AvatarComponent, AvatarListComponent, UxgImageAvatar } from '@finastra/angular-components/avatar';

@Component({
  selector: 'ffdc-avatar-demo',
  templateUrl: './avatar-demo.component.html',
  styleUrls: ['./avatar-demo.component.scss'],
  imports: [AvatarComponent, UxgImageAvatar, AvatarListComponent]
})
export class AvatarDemoComponent {
  constructor() {}
}
