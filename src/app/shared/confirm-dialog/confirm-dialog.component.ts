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
import { combineLatest, map } from 'rxjs';

@Component({
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['../../../styles/_modal.scss']
})
export class ConfirmDialogComponent extends ConfirmDialogBase<ConfirmDialogComponent> implements OnInit {
  @ViewChild('target', { read: ViewContainerRef, static: true }) vcRef: ViewContainerRef;

  // @Output() isConfirmClickedEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() dataEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() formValidEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private componentRef: ComponentRef<DialogDynamicComponent>;

  public isOkayActive: boolean;

  constructor(
    dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private resolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public dialogData: ConfirmDialogOptionsModel<any, any>
  ) {
    super(dialogRef);
  }

  ngOnInit() {
    this.isOkayActive = this.dialogData.dialogMode === ConfirmDialogMode.Confirm;
    if (this.dialogData.dialogMode !== ConfirmDialogMode.Confirm) {
      const factory = this.resolver.resolveComponentFactory(this.dialogData.component?.ref || DialogDynamicComponent);
      this.componentRef = this.vcRef.createComponent(factory);
      this.componentRef.instance.dataEventEmitter = this.dataEventEmitter;
      this.componentRef.instance.formValidEventEmitter = this.formValidEventEmitter;
      // this.componentRef.instance.isConfirmClickedEventEmitter = this.isConfirmClickedEventEmitter;
      this.componentRef.instance.mode = this.dialogData.dialogMode!;
      this.componentRef.instance.label = this.dialogData.label!;

      this.componentRef.instance.formValidEventEmitter.pipe(untilComponentDestroyed(this)).subscribe((state: boolean) => {
        this.isOkayActive = state;
      });

      this.componentRef.instance.dataEventEmitter.pipe(untilComponentDestroyed(this)).subscribe((value: any) => {
        this.valueToEmit = value;
      });

      // this.isConfirmClickedEventEmitter.subscribe(res => {
      //   console.log('re1', res);
      //   if (res) {
      //     this.componentRef.instance.dataEventEmitter.subscribe(r => {
      //       console.log('rrr', r);
      //     })
      //   }
      // })

      // combineLatest([
      //   this.isConfirmClickedEventEmitter,
      //   this.componentRef.instance.dataEventEmitter
      // ]).pipe(
      //   map(([a$, b$]) => ({
      //     isConfirmClicked: a$,
      //     valueToEmit: b$
      //   }))
      // ).subscribe((res) => {
      //   console.log('res1', res);
      //   if (res.isConfirmClicked) {
      //     this.valueToEmit = res.valueToEmit;
      //   }
      // });
    }

    if (this.dialogData.dialogMode === ConfirmDialogMode.Select) {
      this.componentRef.instance.options = this.dialogData.options!;
      this.componentRef.instance.defaultOption = this.dialogData.defaultOption!;
      this.isOkayActive = Boolean(this.dialogData.defaultOption);
    }
  }
}
