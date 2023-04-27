import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from '@finastra/angular-components/toaster';
import { ToasterDemoComponent } from './toaster-demo.component';

describe('ToasterDemoComponent', () => {
  let component: ToasterDemoComponent;
  let fixture: ComponentFixture<ToasterDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ToasterModule,
        CommonModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule,
        ToasterDemoComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create toaster demo ', () => {
    expect(component).toBeTruthy();
  });
});
