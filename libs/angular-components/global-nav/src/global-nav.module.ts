import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GlobalNavComponent } from './global-nav.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UxgBreadcrumbModule } from '@finastra/angular-components/breadcrumb';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    UxgBreadcrumbModule
  ],
  declarations: [GlobalNavComponent, NavbarComponent, SidenavComponent],
  exports: [GlobalNavComponent, NavbarComponent, SidenavComponent]
})
export class GlobalNavModule {}
