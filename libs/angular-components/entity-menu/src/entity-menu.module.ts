import { NgModule } from '@angular/core';

import { EntityMenuComponent, EntityMenuActionsComponent } from './entity-menu.component';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { CommonModule } from '@angular/common';

const components = [EntityMenuComponent, EntityMenuActionsComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule],
  exports: [...components]
})
export class EntityMenuModule {}
