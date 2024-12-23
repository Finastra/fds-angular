import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EntityMenuActionsComponent, EntityMenuComponent, EntityMenuItemWEvent } from '@finastra/angular-components/entity-menu';

const TEMPLATES_DATA: any[] = [
  {
    displayName: 'Countries',
    columnsMatcher: 'name',
    dataSource: '1'
  },
  {
    displayName: 'Products',
    columnsMatcher: 'name',
    dataSource: '2'
  }
];

const COUNTRIES: any[] = [
  {
    name: 'Dubai',
    country: 'United Arab Emirates'
  },
  {
    name: 'London',
    country: 'United Kingdom'
  },
  {
    name: 'New York',
    country: 'United States of America'
  },
  {
    name: 'Paris',
    country: 'France'
  },
  {
    name: 'Singapore',
    country: 'Republic of Singapore'
  },
  {
    name: 'Sydney',
    country: 'Australia'
  },
  {
    name: 'Toronto',
    country: 'Canada'
  }
];

const PRODUCT_LIST = [
  {
    productId: 'Finances',
    name: 'Finances',
    homeUrl: 'https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png',
    description: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Human Resources',
    name: 'Human Resources',
    homeUrl:
      'https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D',
    description: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Finances',
    name: 'Finances',
    homeUrl: 'https://res.cloudinary.com/dmv2klkv7/image/upload/c_scale,w_1300/v1567769894/samples-powerbi_xdk2vt.png',
    description: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  },
  {
    productId: 'Human Resources',
    name: 'Human Resources',
    homeUrl:
      'https://app.powerbi.com/reportEmbed?reportId=04c1a304-e640-4d1c-adbf-e468b661b362&autoAuth=true&ctid=0b9b90da-3fe1-457a-b340-f1b67e1024fb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0In0%3D',
    description: 'quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices',
    image: 'http://dummyimage.com/239x174.jpg/5fa2dd/ffffff',
    applications: []
  }
];

const CT_COLUMNS: any[] = [
  { title: 'name', type: 'string', align: 'left' },
  { title: 'country', type: 'string', align: 'left' }
];
const PR_COLUMNS: any[] = [
  { title: 'productId', type: 'string', align: 'left' },
  { title: 'name', type: 'string', align: 'left' },
  { title: 'description', type: 'string', align: 'left' }
];

@Component({
  selector: 'ffdc-entity-menu-demo',
  templateUrl: './entity-menu-demo.component.html',
  styleUrls: ['./entity-menu-demo.component.scss'],
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    MatOptionModule,
    MatCheckboxModule,
    NgIf,
    EntityMenuComponent,
    EntityMenuActionsComponent
  ]
})
export class EntityMenuDemoComponent implements OnInit {
  length = 2;
  bottomLabel = 'View All';
  templatesData = TEMPLATES_DATA;
  dataSource = COUNTRIES;
  dataSource2 = PRODUCT_LIST;
  columns = CT_COLUMNS;
  columns2 = PR_COLUMNS;
  isOverflow = false;

  currentTemplate: any = this.templatesData[0];
  title = this.currentTemplate.displayName;
  columnsExample = this.columns;
  dataSourceExample = this.dataSource;
  columnsMatcherExample = this.currentTemplate.columnsMatcher;
  overflow = this.isOverflow;

  actionDescription!: string;
  actionEvent!: MouseEvent;

  ngOnInit(): void {
    this.updateTemplate();
  }

  redirect() {
    this.actionDescription = 'Click on ' + this.bottomLabel;
  }

  displayItem(data: EntityMenuItemWEvent) {
    this.actionDescription = JSON.stringify(data.value);
    this.actionEvent = data.$event;
  }

  updateTemplate(event: any = null) {
    this.overflow = event && event.checked !== undefined ? event.checked : this.overflow;

    if (this.currentTemplate.dataSource === '1') {
      this.dataSourceExample = this.overflow ? this.multiplyDataSource(this.dataSource) : this.dataSource;
      this.columnsExample = this.columns;
    } else {
      this.dataSourceExample = this.overflow ? this.multiplyDataSource(this.dataSource2) : this.dataSource2;
      this.columnsExample = this.columns2;
    }

    this.columnsMatcherExample = this.currentTemplate.columnsMatcher;
    this.title = this.currentTemplate.displayName;
  }

  multiplyDataSource(data: any) {
    return data.concat(data).concat(data);
  }

  updateColumnMatcher(data: any) {
    this.columnsMatcherExample = data;
  }
}
