import { GridsterItem } from 'angular-gridster2';

export interface FormBuilderModel {
  width: number;
}

export interface GridsterItemExtended extends GridsterItem {
  width?: string;
  isSelected?: boolean;
  uuid?: string;
  label?: string;
  id?: string;
  isRequired?: boolean;
}

export class ItemDraggablePreviewModel {
  uuid: string;
  type: ItemDraggablePreviewEnum;
  label: string;
  description: string;
  id: string;
}

export enum ItemDraggablePreviewEnum {
  Text = 'text',
  Select = 'select',
  Radio = 'radio',
  Checkbox = 'checkbox',
  Date = 'date',
  Numeric = 'numeric'
}
