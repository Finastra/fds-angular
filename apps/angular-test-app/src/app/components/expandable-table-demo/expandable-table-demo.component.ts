import { Component, ViewChild } from '@angular/core';
import { ExpandableTableComponent } from '@finastra/angular-components/expandable-table';
import { MatOptionModule } from '@angular/material/core';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ExpandableTableComponent as ExpandableTableComponent_1 } from '../../../../../../libs/angular-components/expandable-table/src/expandable-table.component';

export const DATASOURCE = [
  { apiGroup: 'FX Rate', api: 'Rate Changed', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'FX Rate', api: 'Balance Changed', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'FX Rate', api: 'Paymen refused', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  {
    apiGroup: 'Countries',
    api: 'Located country',
    description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit'
  },
  { apiGroup: 'Countries', api: 'Nuke country', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' },
  { apiGroup: 'Countries', api: 'Erase country', description: 'Lorem ipsum dolor sit amet, consectur, adipscing elit' }
];

export const COLUMNS = [
  { displayName: 'API Group', name: 'apiGroup' },
  { displayName: 'API', name: 'api' },
  { displayName: 'Description', name: 'description' }
];

export const GROUP_BY_KEY = 'apiGroup';

@Component({
  selector: 'ffdc-expandable-table-demo',
  templateUrl: './expandable-table-demo.component.html',
  styleUrls: ['./expandable-table-demo.component.scss'],
  standalone: true,
  imports: [
    ExpandableTableComponent_1,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    FormsModule,
    MatSelectModule,
    NgFor,
    MatOptionModule,
    NgIf
  ]
})
export class ExpandableTableDemoComponent {
  @ViewChild(ExpandableTableComponent, { static: true }) table!: ExpandableTableComponent;

  dataSource: any[];
  columns: any[];
  groupByKey: string;
  selectable: boolean;
  actionDescription: string;

  groupByList: any[];

  constructor() {
    this.dataSource = DATASOURCE;
    this.columns = COLUMNS;
    this.groupByKey = 'apiGroup';
    this.selectable = false;
    this.actionDescription = '';

    this.groupByList = COLUMNS.map((col) => col.name);
  }

  updateGroupBy(event: any) {
    delete this.table.groupByKeyLabel;
    this.groupByKey = event.value;
  }
  onSelectionChange(event: any) {
    this.actionDescription = JSON.stringify(event);
  }
}
