import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CHART_PLOLTLY_TYPE, ChartType } from '../chart.models';
import { GroupTracesComponent } from './groupTrace.component';
import { TraceComponent } from './trace.component';

@Component({
  selector: 'uxg-test-container-component',
  template: `
    <uxg-group-traces #grpTrace [columnPosition]="columnPosition" [rowPosition]="rowPosition">
      <uxg-trace
        *ngFor="let trace of traces"
        [dimension]="trace.dimension"
        [dimensionName]="trace.dimensionName"
        [measure]="trace.measure"
        [measureName]="trace.measureName"
        [type]="trace.type"
      ></uxg-trace>
    </uxg-group-traces>
  `,
  imports: [GroupTracesComponent, TraceComponent]
})
class TestContainerComponent implements AfterViewInit {
  @ViewChild('grpTrace', { static: false }) groupeTrace!: GroupTracesComponent;

  traces: any[] = [];
  columnPosition: any = undefined;
  rowPosition: any = undefined;

  ngAfterViewInit() {}
}

describe.skip('GroupTrace directive', () => {
  let component: GroupTracesComponent;
  let fixture: ComponentFixture<GroupTracesComponent>;
  let fixtureTest: ComponentFixture<TestContainerComponent>;
  let componentTest: TestContainerComponent;

  beforeEach(waitForAsync(() => {
    fixtureTest = TestBed.createComponent(TestContainerComponent);
    componentTest = fixtureTest.componentInstance;
    fixtureTest.detectChanges();
  }));

  it('should create', () => {
    fixture = TestBed.createComponent(GroupTracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should create traces', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      labels: trace.dimension,
      values: trace.measure,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v'
    };

    componentTest.traces = [trace];

    fixtureTest.detectChanges();
    componentTest.ngAfterViewInit();
    fixtureTest.detectChanges();

    expect(componentTest.groupeTrace.getTraces()).toStrictEqual([dummyPlotlyTrace]);
  });

  it('should have domain', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      labels: trace.dimension,
      values: trace.measure,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v',
      domain: {
        column: 0,
        row: 0
      }
    };

    componentTest.traces = [trace];
    componentTest.columnPosition = 0;
    componentTest.rowPosition = 0;

    fixtureTest.detectChanges();
    componentTest.ngAfterViewInit();
    fixtureTest.detectChanges();

    expect(componentTest.groupeTrace.getTraces()).toStrictEqual([dummyPlotlyTrace]);
  });

  it('should have change domain', () => {
    const trace = {
      dimension: ['Banks', 'Foods', 'Energies'],
      dimensionName: 'Industry',
      measure: [100, 50, 70],
      measureName: 'PNL',
      type: ChartType.line
    };
    const plotlyType = CHART_PLOLTLY_TYPE[trace.type];
    const dummyPlotlyTrace = {
      dimensionName: trace.dimensionName,
      x: trace.dimension,
      y: trace.measure,
      labels: trace.dimension,
      values: trace.measure,
      name: trace.measureName,
      ...(plotlyType ? plotlyType.trace : {}),
      orientation: 'v',
      domain: {
        column: 0,
        row: 0
      }
    };

    componentTest.traces = [trace];
    componentTest.columnPosition = 0;
    componentTest.rowPosition = 0;

    fixtureTest.detectChanges();
    componentTest.ngAfterViewInit();
    fixtureTest.detectChanges();

    expect(componentTest.groupeTrace.getTraces()).toStrictEqual([dummyPlotlyTrace]);

    dummyPlotlyTrace.domain.column = 1;

    componentTest.traces = [trace];
    componentTest.columnPosition = 1;
    componentTest.rowPosition = 0;

    fixtureTest.detectChanges();
    componentTest.ngAfterViewInit();
    fixtureTest.detectChanges();

    expect(componentTest.groupeTrace.getTraces()).toStrictEqual([dummyPlotlyTrace]);

    dummyPlotlyTrace.domain.row = 1;

    componentTest.traces = [trace];
    componentTest.columnPosition = 1;
    componentTest.rowPosition = 1;

    fixtureTest.detectChanges();
    componentTest.ngAfterViewInit();
    fixtureTest.detectChanges();

    expect(componentTest.groupeTrace.getTraces()).toStrictEqual([dummyPlotlyTrace]);
  });
});
