import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UxgSearchInputComponent } from '../../../../../../libs/angular-components/search-input/src/search-input.component';

@Component({
    selector: 'ffdc-search-input-demo',
    templateUrl: './search-input-demo.component.html',
    styleUrls: ['./search-input-demo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [UxgSearchInputComponent]
})
export class SearchInputDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
