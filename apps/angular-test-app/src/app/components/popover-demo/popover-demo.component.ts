import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PopoverComponent } from '@finastra/angular-components/popover';

@Component({
    selector: 'ffdc-popover-demo',
    templateUrl: './popover-demo.component.html',
    styleUrls: ['./popover-demo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [PopoverComponent, MatButtonModule]
})
export class PopoverDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
