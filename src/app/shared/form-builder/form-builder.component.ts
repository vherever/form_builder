import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType,
} from 'angular-gridster2';

interface GridsterItemExtended extends GridsterItem {
  width?: string;
}

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  private maxWidthCols = 6;
  private currentRowsCount = 2;

  public options: GridsterConfig;
  public dashboard: Array<GridsterItemExtended>;
  public isPlusRowButtonActive: boolean;
  public isMinusRowButtonActive: boolean;

  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      // compactType: CompactType.CompactLeftAndUp,
      setGridSize: true,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: 50,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 200,
      minCols: 6,
      maxCols: 6,
      minRows: 2,
      maxRows: 2,
      maxItemCols: 6, // max item width cols
      minItemCols: 1,
      maxItemRows: 1,
      minItemRows: 1,
      maxItemArea: 6, // max item width cols
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      // fixedColWidth: 150,
      fixedRowHeight: 75,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      draggable: {
        enabled: true
      },
      resizable: {
        handles: {
          s: false,
          e: true,
          n: false,
          w: true,
          se: false,
          ne: false,
          sw: false,
          nw: false,
        },
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      // pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false,
      itemInitCallback: this.itemInitCallback.bind(this),
      itemResizeCallback: this.itemResizeCallback.bind(this)
    };

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 2 },
      { cols: 1, rows: 1, y: 0, x: 4 },
    ];
  }

  constructor(private cdr: ChangeDetectorRef) {
  }

  private setMinusRowButtonActive(currentRowsCount: number): void {
    this.isMinusRowButtonActive = currentRowsCount > 1 || !!this.dashboard.find(o => o.y > 0);
    this.cdr.detectChanges();
  }

  private calculateWidth(cols: number): string {
    return `${ cols }/6`;
  }

  private itemResizeCallback(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    const cols = itemComponent.$item.cols;
    itemComponent.item['width'] = this.calculateWidth(cols);
  }

  private itemInitCallback(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    const cols = itemComponent.$item.cols;
    itemComponent.item['width'] = this.calculateWidth(cols);
    itemComponent.drag.dragMove = function (e: any): void {
      e.stopPropagation();
      e.preventDefault();
      this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
      this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
      this.calculateItemPositionFromMousePosition(e);
      this.calculateItemPositionWithoutScale(e);
    };
    this.setMinusRowButtonActive(this.options.maxRows!);
  }

  removeItem($event: MouseEvent | TouchEvent, item: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    setTimeout(() => {
      this.dashboard.splice(this.dashboard.indexOf(item), 1);
      this.cdr.detectChanges();
    }, 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 2, rows: 1 });
    this.cdr.detectChanges();
  }

  public onNumberOfRowsChange(action: string): void {
    this.currentRowsCount = this.options.maxRows!;
    if (action === '+') {
      this.options.maxRows! += 1;
      this.options.minRows! += 1;
    } else if (action === '-' || !!this.dashboard.find(o => o.y > 0)) {
      this.cdr.detectChanges();
      this.options.maxRows! -= 1;
      this.options.minRows! -= 1;
    }
    this.setMinusRowButtonActive(this.options.maxRows!);
    this.options.api!.optionsChanged!();
  }
}
