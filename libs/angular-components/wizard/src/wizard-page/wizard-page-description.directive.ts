import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[uxgWizardPageDescription]',
  standalone: true
})
export class UxgWizardPageDescriptionComponent {
  constructor(public pageDescriptionTemplateRef: TemplateRef<any>) {}
}
