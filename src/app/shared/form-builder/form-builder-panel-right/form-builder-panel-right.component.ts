import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemDraggablePreviewEnum, ItemDraggablePreviewModel } from '../form-builder.model';
import { getArrayItemByKeyValue } from '../../../core/helpers/common-helper-functions';
import { IconsRepository } from '../../../core/helpers/icons-repository';
import { SearchControlService } from '../../search-control/search-control.service';
import { ConfirmDialogService } from '../../confirm-dialog/confirm-dialog.service';
import { ConfirmDialogMode } from '../../confirm-dialog/confirm-dialog.model';
import { DialogTemplateCreateNewFieldComponent } from '../dialog-template-create-new-field/dialog-template-create-new-field.component';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

const itemPreviewItemsMock: Partial<ItemDraggablePreviewModel>[] = [
  {
    type: ItemDraggablePreviewEnum.Text,
    label: 'Text',
    description: 'Single line Text Input',
    id: 'input_text',
  },
  {
    type: ItemDraggablePreviewEnum.Select,
    label: 'Select from the List',
    description: 'Select option from the list',
    id: 'select',
  },
  {
    type: ItemDraggablePreviewEnum.Checkbox,
    label: 'Multiple Selection',
    description: 'Multiple options selection',
    id: 'selection_multiple',
  },
  {
    type: ItemDraggablePreviewEnum.Radio,
    label: 'Single Selection',
    description: 'Single options selection',
    id: 'selection_single',
  },
  {
    type: ItemDraggablePreviewEnum.Date,
    label: 'Date',
    description: 'Select date from the datepicker',
    id: 'datepicker',
  },
  {
    type: ItemDraggablePreviewEnum.Numeric,
    label: 'Numeric',
    description: 'Numeric Input',
    id: 'input_number',
  },
];

@Component({
  selector: 'form-builder-panel-right',
  templateUrl: './form-builder-panel-right.component.html',
  styleUrls: ['./form-builder-panel-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderPanelRightComponent extends OnDestroyMixin implements OnInit {
  @Input() el: any;
  @Output() itemDraggedPlacedEventEmitter: EventEmitter<ItemDraggablePreviewModel> = new EventEmitter<ItemDraggablePreviewModel>();

  public previewItems: Partial<ItemDraggablePreviewModel>[];
  public dragIconSvg = getArrayItemByKeyValue(IconsRepository.iconsSvgData, 'id', IconsRepository.IconsEnum.DragDots).data;

  constructor(
    public searchControlService: SearchControlService,
    private confirmDialogService: ConfirmDialogService<DialogTemplateCreateNewFieldComponent, Partial<ItemDraggablePreviewModel>>
  ) {
    super();
  }

  ngOnInit() {
    this.previewItems = itemPreviewItemsMock;
  }

  public dragStartHandler(event: any, item: ItemDraggablePreviewModel): void {
  }

  public dragEndHandler(event: any, item: ItemDraggablePreviewModel): void {
    this.itemDraggedPlacedEventEmitter.emit(item);
  }

  public onNotifyFilter(value: string): void {
    this.searchControlService.onNotifyFilter(value);
  }

  public onItemClick(item: Partial<ItemDraggablePreviewModel>): void {
    this.confirmDialogService.open({
      dialogMode: ConfirmDialogMode.Component,
      component: {
        ref: DialogTemplateCreateNewFieldComponent,
        data: {
          item
        }
      },
      width: '300px',
      title: 'Create new field',
      cancelText: 'Cancel',
      confirmText: 'Save'
    });

    this.confirmDialogService
      .confirmed()
      .pipe(untilComponentDestroyed(this))
      .subscribe((confirmed) => {
        console.log('confirmed', confirmed);
      });
  }
}
