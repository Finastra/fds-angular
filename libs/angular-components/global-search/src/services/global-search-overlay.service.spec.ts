import { TestBed } from '@angular/core/testing';
import { GlobalSearchOverlayService } from './global-search-overlay.service';

describe('GlobalSearchOverlayService', () => {
  it('should be created', () => {
    const service: GlobalSearchOverlayService = TestBed.inject(GlobalSearchOverlayService);
    expect(service).toBeTruthy();
  });
});
