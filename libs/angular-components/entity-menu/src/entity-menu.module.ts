import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { EntityMenuActionsComponent, EntityMenuComponent } from './entity-menu.component';

const components = [EntityMenuComponent, EntityMenuActionsComponent];

@NgModule({
    imports: [CommonModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule, ...components],
    exports: [...components]
})
export class EntityMenuModule {}
