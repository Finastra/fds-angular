import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxgGlobalSearch } from './global-search.component';

describe('UxgGlobalSearch', () => {
  let component: UxgGlobalSearch;
  let fixture: ComponentFixture<UxgGlobalSearch>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgGlobalSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
