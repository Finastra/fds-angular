import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTreeComponent } from './filter-tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatTreeModule
  ],
  declarations: [FilterTreeComponent],
  exports: [FilterTreeComponent]
})
export class FilterTreeModule {}
