import { Component, Input, EventEmitter, Output, HostListener, HostBinding } from '@angular/core';
import { Toast } from './toaster.model';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
    selector: 'uxg-toaster',
    templateUrl: './toaster.component.html',
    styleUrls: ['./toaster.component.scss'],
    standalone: true,
    imports: [NgIf, MatIconModule]
})
export class ToasterComponent {
  @Input()
  toast!: Toast;

  @Output() destroy: EventEmitter<void> = new EventEmitter();

  @HostBinding('class.type-success')
  get success(): boolean {
    return this.toast.config.type === 'success';
  }

  @HostBinding('class.type-info')
  get info(): boolean {
    return this.toast.config.type === 'info';
  }

  @HostBinding('class.type-warning')
  get warning(): boolean {
    return this.toast.config.type === 'warning';
  }

  @HostBinding('class.type-error')
  get primary(): boolean {
    return this.toast.config.type === 'error';
  }

  @HostBinding('class.destroy-by-click')
  get destroyByClick(): boolean {
    return this.toast.config.destroyByClick;
  }

  @HostListener('click')
  onClick() {
    this.destroy.emit();
  }
}
