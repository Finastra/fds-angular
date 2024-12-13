import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ToasterConfig, ToasterService, ToastType } from '@finastra/angular-components/toaster';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'ffdc-toaster-demo',
  templateUrl: './toaster-demo.component.html',
  styleUrls: ['./toaster-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatButtonModule]
})
export class ToasterDemoComponent {
  toasterMessage = 'Some message';
  toasterType = ToastType.INFO;
  toasterDuration = 5000;
  toasterDestroyByClick = true;
  toasterTypes = ToastType;

  constructor(private toasterService: ToasterService) {}

  displayToaster() {
    const config: Partial<ToasterConfig> = {
      duration: this.toasterDuration,
      type: this.toasterType,
      destroyByClick: this.toasterDestroyByClick
    };
    this.toasterService.show(this.toasterMessage, config);
  }
}
