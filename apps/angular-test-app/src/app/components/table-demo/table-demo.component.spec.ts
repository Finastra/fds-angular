import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UxgTableModule } from '@finastra/angular-components/table';
import { TableDemoComponent } from './table-demo.component';

describe('TableDemoComponent', () => {
  let component: TableDemoComponent;
  let fixture: ComponentFixture<TableDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        UxgTableModule,
        CommonModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatFormFieldModule,
        MatSidenavModule,
        MatRadioModule,
        FormsModule,
        TableDemoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create demo table ', () => {
    expect(component).toBeTruthy();
  });
});
