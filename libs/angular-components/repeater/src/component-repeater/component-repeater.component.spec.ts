import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { Component, ComponentFactoryResolver, NgModule, Type } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentRepeaterComponent } from './component-repeater.component';

@Component({
  selector: 'uxg-mock-card',
  template: '<p>Mock Card Component</p>'
})
class MockCardComponent {}

@NgModule({
  imports: [CommonModule]
})
export class FakeMockCardNgModule {}

describe('ComponentRepeaterComponent', () => {
  let component: ComponentRepeaterComponent;
  let fixture: ComponentFixture<ComponentRepeaterComponent>;
  let componentFactoryResolver: ComponentFactoryResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FakeMockCardNgModule, CommonModule, ComponentRepeaterComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ComponentRepeaterComponent);
    component = fixture.componentInstance;
    componentFactoryResolver = fixture.debugElement.injector.get<ComponentFactoryResolver>(ComponentFactoryResolver as any);

    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should add MockCardComponent', () => {
    const componentR: Type<any> = MockCardComponent;
    const factory = componentFactoryResolver.resolveComponentFactory(componentR);
    component.factory = factory;
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('uxg-mock-card'))).toBeTruthy();
  });
});
