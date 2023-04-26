import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from '@finastra/angular-components/toaster';
import { VideoThumbnailDemoComponent } from './video-thumbnail.component';

describe('VideoThumbnailDemoComponent', () => {
  let component: VideoThumbnailDemoComponent;
  let fixture: ComponentFixture<VideoThumbnailDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ToasterModule,
        CommonModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        VideoThumbnailDemoComponent,
        MatDialogModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoThumbnailDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create video thumbnail demo ', () => {
    expect(component).toBeTruthy();
  });
});
