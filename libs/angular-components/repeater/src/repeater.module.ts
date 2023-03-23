import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { RepeaterComponent } from './repeater.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ComponentRepeaterComponent } from './component-repeater/component-repeater.component';

@NgModule({
  declarations: [RepeaterComponent, ComponentRepeaterComponent],
  imports: [CommonModule, MatTableModule, ScrollingModule, ExperimentalScrollingModule],
  exports: [RepeaterComponent]
})
export class RepeaterModule {}
