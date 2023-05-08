import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardDemoComponent } from './card-demo.component';

describe('CardDemoComponent', () => {
  let component: CardDemoComponent;
  let fixture: ComponentFixture<CardDemoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
