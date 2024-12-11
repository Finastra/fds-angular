import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
    selector: 'ffdc-list-demo',
    templateUrl: './list-demo.component.html',
    styleUrls: ['./list-demo.component.scss'],
    imports: [MatListModule, MatIconModule, MatBadgeModule]
})
export class ListDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
