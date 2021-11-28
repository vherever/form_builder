import { FormFieldBase } from './field-base';
import { FieldControlTypeModel } from './field-types.model';

export class FormFieldInputNumeric extends FormFieldBase {
  controlType: FieldControlTypeModel = FieldControlTypeModel.InputNumeric;
}
