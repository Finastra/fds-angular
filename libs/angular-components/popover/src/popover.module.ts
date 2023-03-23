import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [CommonModule, MatMenuModule],
  declarations: [PopoverComponent],
  exports: [PopoverComponent]
})
export class PopoverModule {}
