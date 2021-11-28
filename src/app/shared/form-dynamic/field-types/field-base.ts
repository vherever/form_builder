import { KeyValue } from '../../models/models-common';
import { FieldValidationRule } from './field-base.model';
import { FieldControlTypeModel } from './field-types.model';

export class FormFieldBase {
  value: string | number;
  key: string | number;
  label: string;
  order: number;
  width: string;
  options?: KeyValue[];

  /**
   * @description a list of validation rules to apply to current filter item
   */
  validationRules?: FieldValidationRule[];
  controlType: FieldControlTypeModel;

  constructor(options: {
    value: string | number;
    key: string | number;
    label: string;
    order: number;
    width?: string;
    validationRules?: FieldValidationRule[];
    options?: KeyValue[];
  }) {
    console.log('options', options);
    this.value = options.value || null;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.options = options.options || [];
    this.width = options.width || '100%';
    this.validationRules = options.validationRules || [];
  }
}
