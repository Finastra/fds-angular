import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { ScrollingModule as ExperimentalScrollingModule } from '@angular/cdk-experimental/scrolling';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentRepeaterComponent } from './component-repeater/component-repeater.component';
import { RepeaterComponent } from './repeater.component';

@NgModule({
  declarations: [RepeaterComponent, ComponentRepeaterComponent],
  imports: [CommonModule, MatTableModule, ScrollingModule, ExperimentalScrollingModule],
  exports: [RepeaterComponent]
})
export class RepeaterModule {}
