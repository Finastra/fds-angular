import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { UxgBreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [RouterModule, CommonModule, MatMenuModule, MatIconModule, MatListModule, MatIconModule, MatButtonModule],
  exports: [UxgBreadcrumbComponent],
  declarations: [UxgBreadcrumbComponent]
})
export class UxgBreadcrumbModule {}
