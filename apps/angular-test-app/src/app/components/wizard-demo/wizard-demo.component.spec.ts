import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WizardDemoComponent } from './wizard-demo.component';

describe('WizardDemoComponent', () => {
  let component: WizardDemoComponent;
  let fixture: ComponentFixture<WizardDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, MatIconModule, WizardDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
