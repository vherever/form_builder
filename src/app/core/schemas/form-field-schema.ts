import { FormFieldModel } from '../services/api/form-field/form-field.model';

export class FormFieldSchema {
  constructor(options: FormFieldModel) {
    this.uuid = options.uuid;
    this.title = options.title;
    this.description = options.description;
    this.controlType = options.controlType;
  }

  public uuid: string;
  public title: string;
  public description: string;
  public controlType: string;
}
