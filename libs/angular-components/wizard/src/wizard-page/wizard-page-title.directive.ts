import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uxgWizardPageTitle]',
  standalone: true
})
export class UxgWizardPageTitleComponent {
  constructor(public pageTitleTemplateRef: TemplateRef<any>) {}
}
