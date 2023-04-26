import { Component } from '@angular/core';
import { UxgWizardPageDescriptionComponent } from '../../../../../../libs/angular-components/wizard/src/wizard-page/wizard-page-description.directive';
import { UxgWizardPageTitleComponent } from '../../../../../../libs/angular-components/wizard/src/wizard-page/wizard-page-title.directive';
import { UxgWizardPageComponent } from '../../../../../../libs/angular-components/wizard/src/wizard-page/wizard-page.component';
import { MatIconModule } from '@angular/material/icon';
import { UxgWizardButtonComponent } from '../../../../../../libs/angular-components/wizard/src/wizard-button/wizard-button.component';
import { UxgWizardTitleComponent } from '../../../../../../libs/angular-components/wizard/src/wizard-title.component';
import { UxgWizardComponent } from '../../../../../../libs/angular-components/wizard/src/wizard.component';

@Component({
  selector: 'ffdc-wizard-demo',
  templateUrl: './wizard-demo.component.html',
  styleUrls: ['./wizard-demo.component.scss'],
  standalone: true,
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
