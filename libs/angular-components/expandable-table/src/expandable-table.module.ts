import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { ExpandableTableComponent } from './expandable-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UxgTableModule } from '@finastra/angular-components/table';

@NgModule({
  declarations: [ExpandableTableComponent],
  imports: [CommonModule, MatTableModule, MatIconModule, MatButtonModule, MatExpansionModule, MatCheckboxModule, UxgTableModule],
  exports: [ExpandableTableComponent],
  entryComponents: [ExpandableTableComponent]
})
export class ExpandableTableModule {}
