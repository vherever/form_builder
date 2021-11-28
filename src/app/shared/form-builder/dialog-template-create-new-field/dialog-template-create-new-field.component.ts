import { Component, EventEmitter, Inject, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormFieldBase } from '../../form-dynamic/field-types/field-base';
import { FormFieldInputText } from '../../form-dynamic/field-types/field-input-text';
import { FormFieldInputNumeric } from '../../form-dynamic/field-types/field-input-numeric';
import { ValidationRulesEnum } from '../../../core/helpers/validation-rules-helper';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ItemDraggablePreviewModel } from '../form-builder.model';
import { ConfirmDialogOptionsModel } from '../../confirm-dialog/confirm-dialog.model';
import { FormDynamicComponent } from '../../form-dynamic/form-dynamic.component';

@Component({
  templateUrl: './dialog-template-create-new-field.component.html',
})
export class DialogTemplateCreateNewFieldComponent {
  @ViewChild('formDynamicTpl', { static: false }) formDynamicTpl: TemplateRef<FormDynamicComponent>;

  @Output() formValidEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() isConfirmClickedEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  public formFields: FormFieldBase[] = [
    new FormFieldInputText({
      value: '',
      key: 'key',
      label: 'label',
      order: 1,
      validationRules: [{ rule: ValidationRulesEnum.REQUIRED, message: 'This is required.' }],
    }),

    new FormFieldInputNumeric({
      value: 1,
      key: 'key12',
      label: 'label12',
      order: 2,
      validationRules: [{ rule: ValidationRulesEnum.DIGITS, message: 'Should be numeric.' }],
    }),
  ];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDialogOptionsModel<DialogTemplateCreateNewFieldComponent, Partial<ItemDraggablePreviewModel>>) {
  }

  ngOnInit() {
    console.log('data123', this.data);
    this.isConfirmClickedEventEmitter.next(false);
  }

  ngAfterViewInit() {
  }

  public isFormInvalidEventEmit(isFormInvalid: boolean): void {
    this.formValidEventEmitter.emit(!isFormInvalid);
    // @ts-ignore
    // this.dataEventEmitter.emit(this.formDynamicTpl?.form.getRawValue());
  }

  public onDataEventEmit(e: any): void {
    console.log('e', e);
  }
}
