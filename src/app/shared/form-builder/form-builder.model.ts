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
