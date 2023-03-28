import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { SkeletonTextModule } from '@finastra/angular-components/skeleton-text';
import { AccountCardComponent, AccountCardSkeletonComponent } from './account-card.component';

@NgModule({
  declarations: [AccountCardComponent, AccountCardSkeletonComponent],
  imports: [MatCardModule, MatDividerModule, CommonModule, MatIconModule, SkeletonTextModule],
  exports: [AccountCardComponent, AccountCardSkeletonComponent]
})
export class AccountCardModule {}
