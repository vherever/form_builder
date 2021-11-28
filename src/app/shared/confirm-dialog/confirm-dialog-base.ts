import { MatDialogRef } from '@angular/material/dialog';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ConfirmDialogBase<T> extends OnDestroyMixin {
  // public isConfirmClickedEventEmitter: Subject<boolean> = new Subject<boolean>();
  public valueToEmit: any;
  constructor(public dialogRef: MatDialogRef<T>) {
    super();
  }

  public close(value: any): void {
    this.dialogRef.close(value);
  }

  public cancel(): void {
    this.close(false);
  }

  public confirm(): void {
    // this.isConfirmClickedEventEmitter.next(true);
    this.close(this.valueToEmit);
  }
}
