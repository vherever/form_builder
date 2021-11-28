import { FormFieldBase } from './field-base';
import { FieldControlTypeModel } from './field-types.model';

export class FormFieldInputText extends FormFieldBase {
  controlType: FieldControlTypeModel = FieldControlTypeModel.InputText;
}
