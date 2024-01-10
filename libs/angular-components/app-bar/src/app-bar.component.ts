import { NgIf } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [MatToolbarModule, NgIf]
})
export class AppBarComponent {
  //Application's name
  @Input() appName: String = '';
  //Set the logo redirect Uri
  @Input() logoRedirectUri: String = '';
}
