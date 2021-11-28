import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';
import { FormBuilderEditorBoardComponent } from './form-builder-editor-board/form-builder-editor-board.component';
import { ActionsPanelComponent } from './form-builder-editor-board/actions-panel/actions-panel.component';
import { FormBuilderPanelRightComponent } from './form-builder-panel-right/form-builder-panel-right.component';
import { SearchControlModule } from '../search-control/search-control.module';
import { FilterPipeModule } from '../../core/pipes/filter/filter-pipe.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ConfirmDialogModule } from '../confirm-dialog/confirm-dialog.module';
import { DialogTemplateCreateNewFieldComponent } from './dialog-template-create-new-field/dialog-template-create-new-field.component';
import { FormDynamicModule } from '../form-dynamic/form-dynamic.module';

@NgModule({
  imports: [
    CommonModule,
    GridsterModule,
    SafeHtmlPipeModule,
    SearchControlModule,
    FilterPipeModule,
    MatTabsModule,
    ConfirmDialogModule,
    FormDynamicModule
  ],
  declarations: [
    FormBuilderEditorBoardComponent,
    FormBuilderComponent,
    ActionsPanelComponent,
    FormBuilderPanelRightComponent,
    DialogTemplateCreateNewFieldComponent
  ],
  exports: [FormBuilderComponent],
  providers: [],
})
export class FormBuilderModule {
}
