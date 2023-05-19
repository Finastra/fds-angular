import { DatePipe, LowerCasePipe, NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { ChangeLog } from './changelog.models';

@Component({
  selector: 'uxg-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, NgClass, LowerCasePipe, TitleCasePipe, DatePipe]
})
export class UXGChangelogComponent {
  @Input() changelog!: ChangeLog;
  @Input() title!: string;
  @Input() subtitle: string = 'Changelog';
  @Input() displayVersion: 'left' | 'top' | 'none' = 'left';
}
