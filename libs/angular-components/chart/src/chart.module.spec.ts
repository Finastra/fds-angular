import { TestBed, waitForAsync } from '@angular/core/testing';
import { LazyloadScriptService } from '@finastra/angular-components/core';
import { of } from 'rxjs';
import { ChartModule } from './chart.module';

describe.skip('ChartModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ChartModule],
      providers: [
        {
          provide: LazyloadScriptService,
          useValue: {
            load: () => {
              return of((global as any).Plotly);
            }
          }
        }
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChartModule).toBeDefined();
  });
});
