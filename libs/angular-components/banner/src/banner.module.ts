import { NgModule } from '@angular/core';
import { BannerComponent } from './banner.component';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BannerComponent],
  imports: [MatTooltipModule, CommonModule],
  exports: [BannerComponent]
})
export class BannerModule {}
