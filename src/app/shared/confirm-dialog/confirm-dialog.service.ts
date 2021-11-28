import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { map, take } from 'rxjs/operators';
import { ConfirmDialogMode, ConfirmDialogOptionsModel } from './confirm-dialog.model';

@Injectable()
export class ConfirmDialogService<C, T> {
  private dialogRef: MatDialogRef<ConfirmDialogComponent>;

  constructor(private dialog: MatDialog) {}

  public open(options: ConfirmDialogOptionsModel<C, T>): void {
    this.dialogRef = this.dialog.open(ConfirmDialogComponent, {
      autoFocus: false,
      width: options.width || '400px',
      data: this.prepareDialogData(options)
    });
  }

  public confirmed(): Observable<ConfirmDialogOptionsModel<C, T>> {
    return this.dialogRef.afterClosed().pipe(
      take(1),
      map((res) => res)
    );
  }

  public manuallyCloseWithState(state: boolean): void {
    this.dialogRef.close(state);
  }

  private prepareDialogData(options: ConfirmDialogOptionsModel<C, T>): ConfirmDialogOptionsModel<C, T> {
    const baseOptions = {
      dialogMode: options.dialogMode || ConfirmDialogMode.Confirm,
      title: options.title,
      cancelText: options.cancelText,
      confirmText: options.confirmText
    };
    switch (options.dialogMode) {
      case ConfirmDialogMode.Confirm:
        return { ...baseOptions, content: options.content };
      case ConfirmDialogMode.Input:
        return { ...baseOptions, label: options.label };
      case ConfirmDialogMode.Select:
        return { ...baseOptions, label: options.label, options: options.options, defaultOption: options.defaultOption };
      case ConfirmDialogMode.Component:
        return { ...baseOptions, component: options.component };
      default:
        return { ...baseOptions, content: options.content };
    }
  }
}
