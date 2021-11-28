import { Component, EventEmitter, Inject, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormFieldBase } from '../../form-dynamic/field-types/field-base';
import { FormFieldInputText } from '../../form-dynamic/field-types/field-input-text';
import { FormFieldInputNumeric } from '../../form-dynamic/field-types/field-input-numeric';
import { ValidationRulesEnum } from '../../../core/helpers/validation-rules-helper';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDraggablePreviewModel } from '../form-builder.model';
import { ConfirmDialogOptionsModel } from '../../confirm-dialog/confirm-dialog.model';
import { FormDynamicComponent } from '../../form-dynamic/form-dynamic.component';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './dialog-template-create-new-field.component.html',
})
export class DialogTemplateCreateNewFieldComponent {
  @ViewChild('formDynamicTpl', { static: false }) formDynamicTpl: TemplateRef<FormDynamicComponent>;

  @Output() formValidEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  public isConfirmClickedEventEmitter: Subject<boolean>;

  public formFields: FormFieldBase[] = [
    new FormFieldInputText({
      value: '',
      key: 'label',
      label: 'Label',
      order: 1,
      validationRules: [{ rule: ValidationRulesEnum.REQUIRED, message: 'This is required.' }],
    }),

    new FormFieldInputNumeric({
      value: 1,
      key: 'description',
      label: 'Description',
      order: 2,
      validationRules: [{ rule: ValidationRulesEnum.DIGITS, message: 'Should be numeric.' }],
    }),
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogOptionsModel<DialogTemplateCreateNewFieldComponent, Partial<ItemDraggablePreviewModel>>) {
  }

  public isFormInvalidEventEmit(isFormInvalid: boolean): void {
    this.formValidEventEmitter.emit(!isFormInvalid);
  }

  public onDataEventEmit(e: any): void {
    console.log('e', e);
  }
}
