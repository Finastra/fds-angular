import { Component, OnInit } from '@angular/core';
import { SkeletonTextComponent } from '../../../../../../libs/angular-components/skeleton-text/src/skeleton-text.component';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'ffdc-skeleton-demo',
    templateUrl: './skeleton-demo.component.html',
    styleUrls: ['./skeleton-demo.component.scss'],
    standalone: true,
    imports: [MatCardModule, SkeletonTextComponent]
})
export class SkeletonDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
