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
      itemInitCallback: this.itemInitCallback,
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

  private setPlusRowButtonActive(): void {
    this.isPlusRowButtonActive = true;
    this.cdr.detectChanges();
  }

  private calculateWidth(cols: number): string {
    return `${ cols }/6`;
  }

  private itemResizeCallback(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    const that = this;
    const cols = itemComponent.$item.cols;
    itemComponent.item['width'] = that.calculateWidth(cols);
  }

  private itemInitCallback(_: GridsterItem, b: GridsterItemComponentInterface): void {
    b.drag.dragMove = function (e: any): void {
      e.stopPropagation();
      e.preventDefault();
      this.offsetLeft = this.gridster.el.scrollLeft - this.gridster.el.offsetLeft;
      this.offsetTop = this.gridster.el.scrollTop - this.gridster.el.offsetTop;
      this.calculateItemPositionFromMousePosition(e);
      this.calculateItemPositionWithoutScale(e);
    };
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
    console.log('SSS', this.dashboard);
  }

  public onNumberOfRowsChange(action: string): void {
    const currentRowsNum = this.options.maxRows!;
    if (action === '+' && currentRowsNum < 10) {
      this.options.maxRows! += 1;
      this.options.minRows! += 1;
    } else if (action === '-' && currentRowsNum > 1) {
      this.options.maxRows! -= 1;
      this.options.minRows! -= 1;
    }
    this.options.api!.optionsChanged!();
    this.cdr.detectChanges();
  }
}
