import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { SkeletonDemoComponent } from './skeleton-demo.component';

describe('SkeletonDemoComponent', () => {
  let component: SkeletonDemoComponent;
  let fixture: ComponentFixture<SkeletonDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SkeletonDemoComponent, MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
