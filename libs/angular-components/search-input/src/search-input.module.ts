import { NgModule } from '@angular/core';

import { UxgSearchInputComponent } from './search-input.component';
import { CommonModule } from '@angular/common';
import { MatLegacyFormFieldModule as MatFormFieldModule, MatLegacyHint as MatHint } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [UxgSearchInputComponent],
  declarations: [UxgSearchInputComponent]
})
export class UxgSearchInputModule {}
