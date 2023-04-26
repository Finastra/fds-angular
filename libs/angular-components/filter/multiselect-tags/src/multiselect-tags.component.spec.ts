import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MultiselectTag, MultiselectTagsComponent } from './multiselect-tags.component';

@Component({
  template: ` <uxg-multiselect-tags [data]="data" (changes)="updateMultiselectTags($event)" #demoMultiselectTags> </uxg-multiselect-tags> `
})
class WrapperComponent implements OnInit {
  data: MultiselectTag[] = [{ label: 'API' }, { label: 'SPI', isSelected: true }, { label: 'Service API' }];
  @ViewChild('demoMultiselectTags', { static: true }) component: any;

  ngOnInit() {}

  updateMultiselectTags($event: any) {}
}

describe('MultiselectTagsModule', () => {
  let wrapper: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        MatIconModule,
        MatChipsModule,
        NoopAnimationsModule,
        WrapperComponent,
        MultiselectTagsComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(WrapperComponent);
    wrapper = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should get data', () => {
    const newData = wrapper.component.data;
    expect(newData.length).toBe(wrapper.data.length);
  });

  it('should add tag', () => {
    const spy = jest.spyOn(wrapper, 'updateMultiselectTags');
    const tag: MultiselectTag = wrapper.component.data[0];

    wrapper.component.onTagSelection(tag);

    expect(wrapper.component.data[0].isSelected).toBe(true);
    expect(spy).toHaveBeenCalledWith({ added: [wrapper.component.data[0]], removed: [] });
  });

  it('should remove tag', () => {
    const spy = jest.spyOn(wrapper, 'updateMultiselectTags');
    const tag: MultiselectTag = wrapper.component.data[0];

    tag.isSelected = true;
    wrapper.component.onTagSelection(tag);

    expect(wrapper.component.data[0].isSelected).toBe(false);
    expect(spy).toHaveBeenCalledWith({ added: [], removed: [wrapper.component.data[0]] });
  });
});
