import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Inject,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogBase } from './confirm-dialog-base';
import { DialogDynamicComponent } from './dynamic-template/dialog-dynamic.component';
import { ConfirmDialogMode, ConfirmDialogOptionsModel } from './confirm-dialog.model';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['../../../styles/_modal.scss']
})
export class ConfirmDialogComponent extends ConfirmDialogBase<ConfirmDialogComponent> implements OnInit {
  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;

  @Output() eventValueEmitter: EventEmitter<any> = new EventEmitter<any>();

  private componentRef: ComponentRef<DialogDynamicComponent>;

  public isOkayActive: boolean;

  constructor(
    dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public dialogData: ConfirmDialogOptionsModel
  ) {
    super(dialogRef);
  }

  ngOnInit() {
    this.isOkayActive = this.dialogData.dialogMode === ConfirmDialogMode.Confirm;
    if (this.dialogData.dialogMode !== ConfirmDialogMode.Confirm) {
      const factory = this.resolver.resolveComponentFactory(this.dialogData.component?.ref || DialogDynamicComponent);
      this.componentRef = this.vcRef.createComponent(factory);
      this.componentRef.instance.eventValueEmitter = this.eventValueEmitter;
      this.componentRef.instance.mode = this.dialogData.dialogMode!;
      this.componentRef.instance.label = this.dialogData.label!;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.componentRef.instance.eventValueEmitter.pipe(untilComponentDestroyed(this)).subscribe((value: any) => {
        this.isOkayActive = Boolean(value);
        this.valueToEmit = value;
      });
    }
    if (this.dialogData.dialogMode === ConfirmDialogMode.Select) {
      this.componentRef.instance.options = this.dialogData.options!;
      this.componentRef.instance.defaultOption = this.dialogData.defaultOption!;
      this.isOkayActive = Boolean(this.dialogData.defaultOption);
    }
  }
}
