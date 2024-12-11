import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UxgSearchInputComponent } from '@finastra/angular-components/search-input';

@Component({
    selector: 'ffdc-search-input-demo',
    templateUrl: './search-input-demo.component.html',
    styleUrls: ['./search-input-demo.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [UxgSearchInputComponent]
})
export class SearchInputDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
