import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ItemDraggablePreviewEnum, ItemDraggablePreviewModel } from '../form-builder.model';
import { getArrayItemByKeyValue } from '../../../core/helpers/common-helper-functions';
import { IconsRepository } from '../../../core/helpers/icons-repository';
import { SearchControlService } from '../../search-control/search-control.service';

const itemPreviewItemsMock: ItemDraggablePreviewModel[] = [
  {
    uuid: '0b3acab8-6d30-4394-8d87-fd246c2bc226',
    type: ItemDraggablePreviewEnum.Text,
    label: 'Text',
    description: 'Single line Text Input',
    id: 'input_text',
  },
  {
    uuid: '79452c08-1b51-4486-9b4d-1edaa7d1a338',
    type: ItemDraggablePreviewEnum.Select,
    label: 'Select from the List',
    description: 'Select option from the list',
    id: 'select',
  },
  {
    uuid: 'd0d20f97-12fe-474f-910f-85b01548b9d1',
    type: ItemDraggablePreviewEnum.Checkbox,
    label: 'Multiple Selection',
    description: 'Multiple options selection',
    id: 'selection_multiple',
  },
  {
    uuid: '965e51a5-3068-457c-b3a7-ac204aa642aa',
    type: ItemDraggablePreviewEnum.Radio,
    label: 'Single Selection',
    description: 'Single options selection',
    id: 'selection_single',
  },
  {
    uuid: '403ab80e-6445-4974-bfa8-ccc3f8e66a13',
    type: ItemDraggablePreviewEnum.Date,
    label: 'Date',
    description: 'Select date from the datepicker',
    id: 'datepicker',
  },
  {
    uuid: 'aa71fb5f-21be-44ca-b313-98b7f82a90bd',
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
export class FormBuilderPanelRightComponent implements OnInit {
  @Output() itemDraggedPlacedEventEmitter: EventEmitter<ItemDraggablePreviewModel> = new EventEmitter<ItemDraggablePreviewModel>();

  public previewItems: ItemDraggablePreviewModel[];
  public dragIconSvg = getArrayItemByKeyValue(IconsRepository.iconsSvgData, 'id', IconsRepository.IconsEnum.DragDots).data;

  constructor(public searchControlService: SearchControlService) {
  }

  ngOnInit() {
    this.previewItems = itemPreviewItemsMock;
  }

  public dragStartHandler(event: any, item: ItemDraggablePreviewModel): void {
    console.log('dragStartHandler', item);
  }

  public dragEndHandler(event: any, item: ItemDraggablePreviewModel): void {
    console.log('dragEndHandler', event, item);
  }

  onNotifyFilter(value: string): void {
    this.searchControlService.onNotifyFilter(value);
  }
}
