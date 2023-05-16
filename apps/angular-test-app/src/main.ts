import { enableProdMode, importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import {
  TOASTER_CONFIG,
  ToasterContainerOverlayService,
  ToasterContainerRegistry,
  ToasterService
} from '@finastra/angular-components/toaster';
import { ColorSketchModule } from 'ngx-color/sketch';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/components/home/home.component';
import { nestedRoutes } from './app/nested-routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    // modules
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      ColorSketchModule,
      RouterModule.forRoot([
        { path: '', component: HomeComponent },
        ...([] as Routes).concat(...nestedRoutes.map((nestedRoute) => nestedRoute.routes))
      ])
    ),
    // toaster
    ToasterService,
    ToasterContainerRegistry,
    ToasterContainerOverlayService,
    { provide: TOASTER_CONFIG, useValue: {} },
    // others
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    provideAnimations()
  ]
}).catch((err) => console.error(err));
