import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToTopComponent } from './scroll-to-top.component';

describe('ScrollToTopComponent', () => {
  let component: ScrollToTopComponent;
  let fixture: ComponentFixture<ScrollToTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatButtonModule, MatIconModule, NoopAnimationsModule, ScrollToTopComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ScrollToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component instance', () => {
    expect(component).toBeDefined();
  });

  it('should trigger onClick when button is clicked', () => {
    window.scroll = jest.fn();
    const button = fixture.debugElement.query(By.css('button'));

    button.nativeElement.click();
    fixture.detectChanges();

    expect(component.parent.scroll).toBeCalledWith({ top: 0, left: 0, behavior: 'smooth' });
  });

  it('should be able to setup different parent than window', () => {
    component.parentElementSelector = 'html';
    component.ngAfterViewInit();

    expect(component.parent).not.toBe(window);
  });
});
