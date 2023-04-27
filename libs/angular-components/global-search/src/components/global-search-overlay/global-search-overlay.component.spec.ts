import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalSearchOverlayComponent } from './global-search-overlay.component';

describe('GlobalSearchOverlayComponent', () => {
  let component: GlobalSearchOverlayComponent;
  let fixture: ComponentFixture<GlobalSearchOverlayComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
