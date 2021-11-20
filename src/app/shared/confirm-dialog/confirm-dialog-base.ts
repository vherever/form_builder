import { MatDialogRef } from '@angular/material/dialog';
import { OnDestroyMixin } from '@w11k/ngx-componentdestroyed';

export class ConfirmDialogBase<T> extends OnDestroyMixin {
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
    this.close(this.valueToEmit || true);
  }
}
