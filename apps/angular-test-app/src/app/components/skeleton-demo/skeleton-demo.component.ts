import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SkeletonTextComponent } from '@finastra/angular-components/skeleton-text';

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
