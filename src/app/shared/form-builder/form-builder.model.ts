import { GridsterItem } from 'angular-gridster2';
import { generateUUID } from '../../core/helpers/common-helper-functions';

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

export interface ItemDraggablePreviewModel extends GridsterItem {
  uuid: string;
  type: ItemDraggablePreviewEnum;
  label: string;
  description: string;
  id: string;
  width: string;
  isSelected: boolean;
  isRequired: boolean;
}

export class ItemDraggableItemInitializer {
  uuid: string;
  type: ItemDraggablePreviewEnum;
  label: string;
  description: string;
  id: string;
  width: string;
  isSelected: boolean;
  isRequired: boolean;
  constructor(options: {
    type: ItemDraggablePreviewEnum;
    label: string;
    description: string;
    id: string;
    width: string;
  }) {
    this.uuid = generateUUID();
    this.type = options.type;
    this.label = options.label;
    this.description = options.description;
    this.id = options.id;
    this.width = options.width;
    this.isSelected = false;
    this.isRequired = false;
  }
}

export enum ItemDraggablePreviewEnum {
  Text = 'text',
  Select = 'select',
  Radio = 'radio',
  Checkbox = 'checkbox',
  Date = 'date',
  Numeric = 'numeric'
}
