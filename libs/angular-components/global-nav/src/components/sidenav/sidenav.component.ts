import { NgClass, NgFor, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  forwardRef
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavigationNode } from '../../services/navigation.model';

@Component({
  selector: 'uxg-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  imports: [MatCardModule, MatListModule, NgFor, NgClass, MatIconModule, UpperCasePipe, RouterModule]
})
export class SidenavComponent implements OnInit, OnChanges {
  @Input() appName!: string;
  @Input() shortName!: string;
  @Input() navigationNodes!: NavigationNode[];
  @Input() activeRoute!: string;
  @Input() headerTitle!: string;

  @Output() logout = new EventEmitter<void>();
  @Output() nodeChosen = new EventEmitter<NavigationNode>();

  currentNodes!: NavigationNode[];

  iconName!: string;

  constructor(
    @Inject(forwardRef(() => MatSidenav)) private _host: MatSidenav,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.iconName = this.shortName && this.shortName.length > 0 ? this.shortName : this.getIconName(this.appName);
    this._host.openedChange.subscribe(() => {
      this.currentNodes = this.navigationNodes;
      this.cd.markForCheck();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.navigationNodes) {
      this.currentNodes = changes.navigationNodes.currentValue;
    }
  }

  private getIconName(name: string) {
    if (!name) return name;
    const words = name.replace('-', ' ').split(' ');
    if (words && words.length === 1) return name.substring(0, 3);
    return !words
      ? ''
      : words
          .map((word) => word.substring(0, 1))
          .join('')
          .substring(0, 3);
  }

  onClick(node: NavigationNode) {
    this.nodeChosen.emit(node);
    this._host.close();
  }
}
