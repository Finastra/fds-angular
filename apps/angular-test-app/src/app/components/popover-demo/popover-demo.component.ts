import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PopoverComponent } from '../../../../../../libs/angular-components/popover/src/popover.component';

@Component({
    selector: 'ffdc-popover-demo',
    templateUrl: './popover-demo.component.html',
    styleUrls: ['./popover-demo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [PopoverComponent, MatButtonModule]
})
export class PopoverDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
