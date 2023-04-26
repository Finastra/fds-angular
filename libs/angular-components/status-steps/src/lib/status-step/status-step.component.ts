import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'uxg-status-step',
  templateUrl: './status-step.component.html',
  styleUrls: ['./status-step.component.scss'],
  standalone: true
})
export class StatusStepComponent {
  @ViewChild('template') public template?: TemplateRef<any>;
}
