import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { ToasterComponent } from './toaster.component';

const INITIAL_TOAST = <any>{
  message: 'test toast',
  config: { type: 'success' }
};

describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, ToasterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    component.toast = INITIAL_TOAST;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
