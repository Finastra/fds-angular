import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
    selector: 'ffdc-ui-elements-demo',
    templateUrl: './ui-elements-demo.component.html',
    styleUrls: ['./ui-elements-demo.component.scss'],
    imports: [
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        RouterLink,
        MatButtonToggleModule,
        MatCardModule,
        MatMenuModule,
        MatChipsModule,
        MatTabsModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgIf,
        MatSelectModule,
        MatOptionModule,
        MatExpansionModule
    ]
})
export class UiElementsDemoComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  tabText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus mauris orci, ac aliquam velit luctus vitae. Integer semper tortor tortor, in venenatis diam dignissim sed. Sed tempus lacus ac nisi lacinia vestibulum vitae in lectus.';

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl
    });
  }
}
