import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {
  DisplayGrid,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType,
} from 'angular-gridster2';
import { maxBy } from 'lodash';
import { getArrayItemByKeyValue } from '../../core/helpers/common-helper-functions';
import { IconsRepository } from '../../core/helpers/icons-repository';

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
  private defaultItemSize = { x: 0, y: 0, cols: 2, rows: 1 };

  public options: GridsterConfig;
  public dashboard: Array<GridsterItemExtended>;
  public isPlusRowButtonActive: boolean;
  public isMinusRowButtonActive: boolean;
  public dragIconSvg = getArrayItemByKeyValue(IconsRepository.iconsSvgData, 'id', IconsRepository.IconsEnum.DragDots).data;

  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      // compactType: CompactType.CompactLeftAndUp,
      setGridSize: true,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
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
      defaultItemCols: 2,
      defaultItemRows: 1,
      // fixedColWidth: 150,
      fixedRowHeight: 75,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: true,
      enableEmptyCellDrag: true,
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
      itemResizeCallback: this.itemResizeCallback.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this)
    };

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 2 },
      { cols: 1, rows: 1, y: 0, x: 4 },
    ];
  }

  // public dragDotsIcon = iconsSvgData

  constructor(private cdr: ChangeDetectorRef) {
  }

  private setMinusRowButtonActive(currentRowsCount: number): void {
    // this.options.maxRows <=
    // currentRowsCount > 1 &&
    const maxY = maxBy(this.dashboard, (o) => {
      return o.y;
    });
    console.log('maxY', currentRowsCount, maxY!.y);
    this.isMinusRowButtonActive = currentRowsCount > maxY!.y + 1;
    this.cdr.detectChanges();
  }

  private calculateWidth(cols: number): string {
    return `${ cols }/6`;
  }

  private itemResizeCallback(item: GridsterItem, itemComponent: GridsterItemComponentInterface): void {
    const cols = itemComponent.$item.cols;
    itemComponent.item['width'] = this.calculateWidth(cols);
  }

  private emptyCellDropCallback(event: DragEvent, item: GridsterItem): void {
    console.log('emptyCellDropCallback', event);
  }

  emptyCellClick(event: MouseEvent, item: GridsterItem): void {
    console.log('event!!!', event);
    console.log('emptyCellClick', item);
    // item.cols = 2;
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
    this.options.api!.optionsChanged!();
  }

  dragStartHandler(ev: DragEvent): void {
    console.log('ev', ev);
    if (ev.dataTransfer) {
      // ev.dataTransfer.setData('text/plain', 'Drag Me Button');
      // ev.dataTransfer.dropEffect = 'copy';
    }
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
      this.setMinusRowButtonActive(this.options.maxRows!);
      this.cdr.detectChanges();
    }, 1);
  }

  addItem(): void {
    this.dashboard.push(this.defaultItemSize);
    this.cdr.detectChanges();
  }

  public onNumberOfRowsChange(action: string): void {
    console.log('dashboard', this.dashboard);
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
