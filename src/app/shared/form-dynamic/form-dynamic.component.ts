import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormFieldBase } from './field-types/field-base';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGeneratorService } from '../../core/services/form-generator.service';
import { OnDestroyMixin, untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';
import { ConfirmDialogService } from '../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.scss']
})
export class FormDynamicComponent extends OnDestroyMixin implements OnInit {
  @Output() isFormInvalidEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() dataEventEmitter: EventEmitter<any>;
  @Input() formFields: FormFieldBase[];

  public form: FormGroup;

  constructor(
    private formGeneratorService: FormGeneratorService,
    private confirmDialogService: ConfirmDialogService<any, any>
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.formGeneratorService.toFormGroup(this.formFields);
    this.isFormInvalidEventEmitter.emit(this.form.invalid);
    this.form.valueChanges.pipe(untilComponentDestroyed(this)).subscribe(() => {
      this.isFormInvalidEventEmitter.emit(this.form.invalid);
      this.dataEventEmitter.emit(this.form.getRawValue());
    })
  }

  public isControlHasError(fieldControl: FormControl): boolean {
    return fieldControl && fieldControl.errors && fieldControl.touched;
  }

  public onKeyUp(controlId: string): void {
    this.form.controls[controlId].markAsTouched();
  }
}
