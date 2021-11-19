import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';
import { ActionsPanelComponent } from './actions-panel/actions-panel.component';

@NgModule({
  imports: [CommonModule, GridsterModule, SafeHtmlPipeModule],
  declarations: [FormBuilderComponent, ActionsPanelComponent],
  exports: [FormBuilderComponent],
  providers: [],
})
export class FormBuilderModule {
}
