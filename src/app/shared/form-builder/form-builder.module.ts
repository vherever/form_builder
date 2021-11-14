import { NgModule } from '@angular/core';
import { FormBuilderComponent } from './form-builder.component';
import { CommonModule } from '@angular/common';
import { GridsterModule } from 'angular-gridster2';
// import { GridsterModule } from 'angular2gridster';

@NgModule({
  imports: [CommonModule, GridsterModule],
  declarations: [FormBuilderComponent],
  exports: [FormBuilderComponent],
  providers: [],
})
export class FormBuilderModule {
}
