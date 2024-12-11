import { Component, forwardRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'ffdc-field-matcher',
  templateUrl: './field-matcher.component.html',
  styleUrls: ['./field-matcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldMatcherComponent),
      multi: true
    }
  ],
  imports: [NgFor, MatFormFieldModule, MatSelectModule, MatOptionModule, KeyValuePipe]
})
export class FieldMatcherComponent implements ControlValueAccessor, OnInit, OnDestroy, OnChanges {
  @Input() fields: any;
  @Input() templateFields!: { [key: string]: any };

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnDestroy(): void {}

  writeValue(value: any): void {
    this.templateFields = value;
    this.onChange(value);
    this.onTouched();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {}

  onSelectionChange(changes: MatSelectChange, key: string) {
    const data = { ...this.templateFields };
    data[key] = changes.value.name;
    this.writeValue(data);
  }

  compareWith(o1: any, o2: string): boolean {
    if (o1.name && o2) {
      return o1.name === o2;
    }
    return false;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit() {}
}
