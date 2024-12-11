import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface FilterGroupDialogData {
  existingNames: string[];
}

@Component({
    selector: 'uxg-filter-group-dialog',
    templateUrl: 'filter-group-dialog.component.html',
    styleUrls: ['filter-group-dialog.component.scss'],
    imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatButtonModule]
})
export class FilterGroupDialogComponent implements OnInit {
  filterName!: FormControl;
  constructor(public dialogRef: MatDialogRef<FilterGroupDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: FilterGroupDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  save(): void {
    if (!this.filterName.invalid) this.dialogRef.close(this.filterName.value);
  }

  ngOnInit() {
    this.filterName = new FormControl('', [Validators.required, this.nameExistsValidator()]);
  }

  nameExistsValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return this.data.existingNames.indexOf(control.value) >= 0 ? { nameExists: { value: control.value } } : null;
    };
  }

  getErrorMessage() {
    return this.filterName.hasError('required') ? 'Name is required' : this.filterName.hasError('nameExists') ? 'Name already exists' : '';
  }
}
