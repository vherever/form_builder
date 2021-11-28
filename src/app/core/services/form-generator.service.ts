import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormFieldBase } from '../../shared/form-dynamic/field-types/field-base';
import { getValidationRules } from '../helpers/validation-rules-helper';

@Injectable({ providedIn: 'root' })
export class FormGeneratorService {
  public toFormGroup(data: FormFieldBase[]): FormGroup {
    const group = data.reduce((acc: {[key: string]: FormControl}, curr) => {
      acc[curr.key] = new FormControl(curr.value, getValidationRules(curr));
      return acc;
    }, {});
    return new FormGroup(group);
  }
}
