import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonHubService } from '../services/button-hub.service';
import { PageCollectionService } from '../services/page-collection.service';
import { WizardNavigationService } from '../services/wizard-navigation.service';
import { UxgWizardButtonComponent } from './wizard-button.component';

describe('UxgWizardButtonComponent', () => {
  let component: UxgWizardButtonComponent;
  let fixture: ComponentFixture<UxgWizardButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [UxgWizardButtonComponent],
      providers: [WizardNavigationService, PageCollectionService, ButtonHubService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxgWizardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
