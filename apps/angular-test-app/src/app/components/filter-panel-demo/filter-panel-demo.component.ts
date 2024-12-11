import { JsonPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { FilterGroupComponent, UxgFilter } from '@finastra/angular-components/filter/filter-group';
import { FilterTagsComponent, Tag } from '@finastra/angular-components/filter/filter-tags';
import { FilterToggleComponent, ToggleBtn } from '@finastra/angular-components/filter/filter-toggle';
import { FilterTreeComponent, TreeNode } from '@finastra/angular-components/filter/filter-tree';
import { MultiselectTagsComponent } from '@finastra/angular-components/filter/multiselect-tags';
import { sampleFilterTags, sampleFilterTree, sampleGroupTags, sampleTimeline, sampleToggleBtn } from './filter-panel-demo.sample-data';

@Component({
    selector: 'ffdc-filter-panel-demo',
    templateUrl: './filter-panel-demo.component.html',
    styleUrls: ['./filter-panel-demo.component.scss'],
    imports: [
        MatTabsModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        FilterToggleComponent,
        FilterTagsComponent,
        MultiselectTagsComponent,
        NgIf,
        FilterTreeComponent,
        MatBadgeModule,
        FilterGroupComponent,
        UxgFilter,
        JsonPipe
    ]
})
export class FilterPanelDemoComponent implements OnInit {
  sampleDataTree: TreeNode[] = [];
  sampleDataTags: Tag[] = [];
  sampleGroupTags: Tag[] = [];
  sampleMixTags: Tag[] = [];
  sampleDataToggle: ToggleBtn[] = [];
  sampleDataTimeline: ToggleBtn[] = [];
  filterExpression: string[] = [];
  groupValue = 'api';
  initialGroupState = 'api';

  multiselectTagsSampleData = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  chosenTags: string[] = [];
  chosenMultiselectTags: string[] = [];

  treeFilter: string[] = [];
  tagFilter: string[] = [];
  groupTagFilter: string[] = [];
  multiselectGroupTags: string[] = [];
  groupFilter: string[] = [];
  toggleFilter: string[] = [];
  constructor() {}

  ngOnInit() {
    this.groupValue = this.initialGroupState;
    this.sampleDataTree = sampleFilterTree;
    this.sampleDataTags = sampleFilterTags;
    this.sampleGroupTags = sampleGroupTags;
    this.sampleMixTags = [...sampleGroupTags, { category: 'D', label: 'D' }];
    this.sampleDataToggle = sampleToggleBtn;
    this.sampleDataTimeline = sampleTimeline;
  }

  updateFilterTree(changes: any[]) {
    this.treeFilter = changes;
  }

  onGroupChange(val: string) {
    this.groupValue = val;
  }

  updateFilterTags(changes: string[]) {
    this.tagFilter = changes;
  }

  updateGroupFilterTags(changes: string[]) {
    this.groupTagFilter = changes;
  }

  updateMultiselectGroupTags(changes: string[]) {
    this.multiselectGroupTags = changes;
  }

  updateFilterToggle(changes: any[]) {
    this.toggleFilter = changes;
  }

  updateFilterGroup(changes: any[]) {
    this.groupFilter = changes;
  }

  updateMultiselectTags(tags: any) {
    this.chosenMultiselectTags = tags;
  }
}
