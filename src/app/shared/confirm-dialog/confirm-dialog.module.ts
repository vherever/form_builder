import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { ConfirmDialogService } from './confirm-dialog.service';
import { CommonModule } from '@angular/common';
import { DialogDynamicComponent } from './dynamic-template/dialog-dynamic.component';
import { AutofocusDirectiveModule } from '../../core/directives/autofocus/autofocus-directive.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    AutofocusDirectiveModule,
    SafeHtmlPipeModule
  ],
  declarations: [ConfirmDialogComponent, DialogDynamicComponent],
  providers: [ConfirmDialogService]
})
export class ConfirmDialogModule {}
