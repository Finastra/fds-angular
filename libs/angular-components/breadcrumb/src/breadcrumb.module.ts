import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UxgBreadcrumbComponent } from './breadcrumb.component';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

@NgModule({
  imports: [RouterModule, CommonModule, MatMenuModule, MatIconModule, MatListModule, MatIconModule, MatButtonModule],
  exports: [UxgBreadcrumbComponent],
  declarations: [UxgBreadcrumbComponent]
})
export class UxgBreadcrumbModule {}
