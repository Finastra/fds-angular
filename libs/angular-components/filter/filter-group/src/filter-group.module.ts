import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

import { FilterGroupComponent } from './filter-group.component';
import { UxgFilter } from './filter.directive';
import { FilterGroupDialogComponent } from './filter-group-dialog/filter-group-dialog.component';
import { ClickOutsideModule } from '@finastra/angular-components/core';

@NgModule({
  declarations: [FilterGroupComponent, UxgFilter, FilterGroupDialogComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatBadgeModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDialogModule,
    FormsModule,
    ClickOutsideModule
  ],
  entryComponents: [FilterGroupDialogComponent],
  exports: [FilterGroupComponent, UxgFilter]
})
export class FilterGroupModule {}
