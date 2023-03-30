import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UxgSearchInputComponent } from './search-input.component';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [UxgSearchInputComponent],
  declarations: [UxgSearchInputComponent]
})
export class UxgSearchInputModule {}
