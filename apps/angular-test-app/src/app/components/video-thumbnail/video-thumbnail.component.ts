import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Video, VideoThumbnailComponent, VideoWEvent } from '@finastra/angular-components/video-thumbnail';
@Component({
  selector: 'ffdc-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, FormsModule, MatDialogModule, VideoThumbnailComponent]
})
export class VideoThumbnailDemoComponent {
  video: Video = {
    thumbnail: 'assets/video-1.png',
    alt: 'Kate',
    url: '//players.brightcove.net/2456793370001/uqkGU5crh_default/index.html?videoId=5853810002001&autoplay=any'
  };

  constructor(private dialog: MatDialog) {}

  onVideoClick(data: VideoWEvent) {
    this.dialog.open<VideoDialogComponent>(VideoDialogComponent, {
      width: '61vw',
      data
    });
    data.$event.preventDefault();
    data.$event.stopPropagation();
  }
}

@Component({
  selector: 'uxg-video-dialog',
  template: `
    <h3>You requested to display the following video :</h3>
    <code>{{ video.value | json }}</code>
    <br />
    <h3>Click event details</h3>
    <ul>
      <li>which : {{ video.$event.which }}</li>
      <li>metaKey : {{ video.$event.metaKey }}</li>
      <li>ctrlKey : {{ video.$event.ctrlKey }}</li>
    </ul>
  `,
  imports: [JsonPipe]
})
export class VideoDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public video: VideoWEvent) {}
}
