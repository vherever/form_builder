import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';

@NgModule({
  imports: [CommonModule, GridsterModule, SafeHtmlPipeModule],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
  providers: [],
})
export class FormBuilderModule {
}
