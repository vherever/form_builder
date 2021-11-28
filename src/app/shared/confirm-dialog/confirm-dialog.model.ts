import { ComponentType } from '@angular/cdk/overlay';
import { KeyValue } from '../models/models-common';

export enum ConfirmDialogMode {
  Confirm = 'confirm',
  Select = 'select',
  Input = 'input',
  Component = 'component'
}

interface optionalDataModel {
  data?: Object;
}

export interface ConfirmDialogOptionsModel<C, T> extends optionalDataModel {
  title: string;
  cancelText?: string;
  confirmText?: string;
  dialogMode?: ConfirmDialogMode;
  component?: {
    ref: ComponentType<C>;
    data: T;
  };
  content?: string;
  width?: string;
  options?: KeyValue[];
  defaultOption?: KeyValue;
  label?: string;
}
