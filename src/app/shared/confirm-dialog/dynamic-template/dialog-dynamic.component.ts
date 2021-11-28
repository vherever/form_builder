import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogMode } from '../confirm-dialog.model';
import { KeyValue } from '../../models/models-common';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './dialog-dynamic.component.html'
})
export class DialogDynamicComponent implements OnInit {
  @Input() mode: ConfirmDialogMode;
  @Input() label: string;
  @Input() options: KeyValue[];
  @Input() defaultOption: KeyValue;

  @Output() dataEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() formValidEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isConfirmClickedEventEmitter: Subject<boolean> = new Subject<boolean>();

  public form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      field: ['', Validators.required]
    });
  }

  onValueChanged(value: string | boolean): void {
    // this.eventValueEmitter.emit(value);
  }
}
