import { ValidatorFn, Validators } from '@angular/forms';
import { FormFieldBase } from '../../shared/form-dynamic/field-types/field-base';
import { CustomValidators } from 'ng2-validation';

export enum ValidationRulesEnum {
  REQUIRED = 'required',
  NUMBER = 'number',
  MIN = 'min',
  MAX = 'max',
  DIGITS = 'digits',
  DATE = 'date',
  MIN_DATE = 'minDate',
  MAX_DATE = 'maxDate'
}

export function getValidationRules(fieldItem: Partial<FormFieldBase>): ValidatorFn[] {
  return fieldItem && fieldItem.validationRules
    ? fieldItem.validationRules.reduce((acc: any, curr) => {
        switch (curr.rule) {
          case ValidationRulesEnum.REQUIRED:
            acc.push(Validators.required);
            break;
          case ValidationRulesEnum.NUMBER:
            acc.push(CustomValidators.number);
            break;
          case ValidationRulesEnum.MIN:
            acc.push(CustomValidators.min(curr.extra.min));
            break;
          case ValidationRulesEnum.MAX:
            acc.push(CustomValidators.max(curr.extra.max));
            break;
          case ValidationRulesEnum.DIGITS:
            acc.push(CustomValidators.digits);
            break;
          case ValidationRulesEnum.DATE:
            acc.push(CustomValidators.date);
            break;
          case ValidationRulesEnum.MIN_DATE:
            acc.push(CustomValidators.minDate(curr.extra.minDate));
            break;
          case ValidationRulesEnum.MAX_DATE:
            acc.push(CustomValidators.minDate(curr.extra.maxDate));
            break;
        }
        return acc;
      }, [])
    : [];
}
