import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';
import { FormBuilderEditorBoardComponent } from './form-builder-editor-board/form-builder-editor-board.component';
import { ActionsPanelComponent } from './form-builder-editor-board/actions-panel/actions-panel.component';
import { FormBuilderPanelRightComponent } from './form-builder-panel-right/form-builder-panel-right.component';

@NgModule({
  imports: [CommonModule, GridsterModule, SafeHtmlPipeModule],
  declarations: [
    FormBuilderEditorBoardComponent,
    FormBuilderComponent,
    ActionsPanelComponent,
    FormBuilderPanelRightComponent
  ],
  exports: [FormBuilderComponent],
  providers: [],
})
export class FormBuilderModule {
}
