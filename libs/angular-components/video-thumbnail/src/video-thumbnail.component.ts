import { Component, Input, Output, EventEmitter, Attribute } from '@angular/core';
import { VideoWEvent, Video } from './video-thumbnail.interface';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'uxg-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
  standalone: true,
  imports: [NgIf, MatIconModule]
})
export class VideoThumbnailComponent {
  @Input() video!: Video;

  @Output() videoClick = new EventEmitter<VideoWEvent>();

  constructor(@Attribute('dense') public dense: any, @Attribute('large') public large: any) {}

  onVideoClick(video: Video, $event: MouseEvent) {
    this.videoClick.emit({
      value: video,
      $event
    });
    $event.preventDefault();
  }
}
