import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  UxgWizardButtonComponent,
  UxgWizardComponent,
  UxgWizardPageComponent,
  UxgWizardPageDescriptionComponent,
  UxgWizardPageTitleComponent,
  UxgWizardTitleComponent
} from '@finastra/angular-components/wizard';

@Component({
  selector: 'ffdc-wizard-demo',
  templateUrl: './wizard-demo.component.html',
  styleUrls: ['./wizard-demo.component.scss'],
  imports: [
    UxgWizardComponent,
    UxgWizardTitleComponent,
    UxgWizardButtonComponent,
    MatIconModule,
    UxgWizardPageComponent,
    UxgWizardPageTitleComponent,
    UxgWizardPageDescriptionComponent
  ]
})
export class WizardDemoComponent {
  constructor() {}
}
