import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FilterToggleComponent } from './filter-toggle.component';

describe('FilterToggleComponent', () => {
  let component: FilterToggleComponent;
  let fixture: ComponentFixture<FilterToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        NoopAnimationsModule,
        MatIconModule,
        MatExpansionModule,
        MatButtonToggleModule,
        FilterToggleComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(FilterToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear filters', () => {
    component.initialValue = { label: 'API', value: 'api' };
    component.clearSelection();

    expect(component.selectedValue).toBe(undefined);
  });

  it('should clear filters', () => {
    component.initialValue = { label: 'API', value: 'api' };
    component.selectedValue = { label: 'Explorer', value: 'explorer' };
    component.reset();

    expect(component.selectedValue).toBe(component.initialValue);
  });

  it('should update initial value', () => {
    component.initialValue = { label: 'API', value: 'api' };
    const updatedValue = { label: 'Explorer', value: 'explorer' };
    component.onValueChange(updatedValue);

    expect(component.selectedValue).toBe(updatedValue);
  });
});
