import { Overlay } from '@angular/cdk/overlay';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatIconRegistry } from '@angular/material/icon';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterContainerComponent } from './toaster-container.component';
import { TOASTER_CONFIG, ToasterConfig } from './toaster.config';
import { ToasterContainerOverlayService, ToasterContainerRegistry, ToasterService } from './toaster.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('ToasterService', () => {
  let service: ToasterService;
  let overlayService: ToasterContainerOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      providers: [
        { provide: TOASTER_CONFIG, useValue: new InjectionToken<ToasterConfig>('Default toaster config') },
        ToasterContainerRegistry,
        Overlay,
        ToasterContainerOverlayService,
        MatIconRegistry,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
      ]
    })
      .overrideModule(BrowserDynamicTestingModule, {
        set: {
          entryComponents: [ToasterContainerComponent]
        }
      })
      .compileComponents();

    service = TestBed.inject(ToasterService);
    overlayService = TestBed.inject(ToasterContainerOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show success toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.success('success');
    expect(spy).toHaveBeenCalledWith('success', { type: 'success' });
  });

  it('should show error toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.error('error');
    expect(spy).toHaveBeenCalledWith('error', { type: 'error' });
  });

  it('should show warning toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.warning('warning');
    expect(spy).toHaveBeenCalledWith('warning', { type: 'warning' });
  });

  it('should show info toast', () => {
    const spy = jest.spyOn(service, 'show');
    service.info('info');
    expect(spy).toHaveBeenCalledWith('info', { type: 'info' });
  });

  it('should create toaster overlay', () => {
    expect(overlayService.create().getConfig().panelClass).toEqual('uxg-toaster-overlay');
  });

  it('should return overlay scroll strategy', () => {
    expect(overlayService.scrollStrategies).toBeTruthy();
  });
});
