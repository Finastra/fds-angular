import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { GlobalSearchOverlayComponent } from './components/global-search-overlay/global-search-overlay.component';
import { UxgGlobalSearch } from './global-search.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    OverlayModule,
    FlexLayoutModule.withConfig({ useColumnBasisZero: false })
  ],
  exports: [UxgGlobalSearch, GlobalSearchOverlayComponent],
  declarations: [UxgGlobalSearch, GlobalSearchOverlayComponent]
})
export class GlobalSearchModule {}
