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

export interface ConfirmDialogOptionsModel extends optionalDataModel {
  title: string;
  cancelText?: string;
  confirmText?: string;
  dialogMode?: ConfirmDialogMode;
  component?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: ComponentType<any>;
    data: any;
  };
  content?: string;
  width?: string;
  options?: KeyValue[];
  defaultOption?: KeyValue;
  label?: string;
}
