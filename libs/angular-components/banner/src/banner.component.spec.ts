import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BannerComponent } from './banner.component';

describe('BannerModule', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatTooltipModule, BannerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    component.bannerData = [
      {
        name: 'Identity provider',
        value: 8,
        tooltip: 'text'
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
