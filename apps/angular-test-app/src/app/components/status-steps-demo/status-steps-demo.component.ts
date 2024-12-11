import { Component, OnInit } from '@angular/core';
import { HorizontalStatusStepperComponent, StatusStepComponent } from '@finastra/angular-components/status-stepper';

@Component({
  selector: 'ffdc-status-steps-demo',
  templateUrl: './status-steps-demo.component.html',
  styleUrls: ['./status-steps-demo.component.scss'],
  imports: [HorizontalStatusStepperComponent, StatusStepComponent]
})
export class StatusStepsDemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
