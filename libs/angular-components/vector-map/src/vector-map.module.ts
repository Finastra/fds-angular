import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { VectorMapComponent } from './vector-map.component';
import { PlotlyViaCDNModule, PlotlyService } from 'angular-plotly.js';
import { LazyloadScriptService } from '@finastra/angular-components/core';

@NgModule({
  imports: [CommonModule, MatTooltipModule, FlexLayoutModule, MatSelectModule, MatFormFieldModule, MatInputModule, PlotlyViaCDNModule],
  declarations: [VectorMapComponent],
  exports: [VectorMapComponent]
})
export class VectorMapModule {
  constructor(lazyLoadScriptService: LazyloadScriptService) {
    lazyLoadScriptService.load('plotly.js', 'Plotly').subscribe((plotly) => {
      PlotlyService.setPlotly(plotly);
    });
  }
}
