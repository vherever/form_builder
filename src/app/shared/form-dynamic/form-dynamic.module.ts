import { NgModule } from '@angular/core';
import { FormDynamicComponent } from './form-dynamic.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormDynamicComponent],
  exports: [FormDynamicComponent],
})
export class FormDynamicModule {}
