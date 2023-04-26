import { Component, OnInit, Input, ChangeDetectorRef, ViewEncapsulation, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgClass } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'ffdc-repeater-card-example',
  templateUrl: './repeater-card-example.component.html',
  styleUrls: ['./repeater-card-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatCardModule, NgClass, MatIconModule, MatButtonModule, MatMenuModule]
})
export class RepeaterCardExampleComponent implements OnInit {
  @Input() data: any = {};
  @Input() columnsMatcher: any = {};
  @Input() selected = false;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}
}
