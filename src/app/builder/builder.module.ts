import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder.component';
import { FormBuilderModule } from '../shared/form-builder/form-builder.module';

@NgModule({
  imports: [CommonModule, BuilderRoutingModule, FormBuilderModule],
  declarations: [BuilderComponent],
})
export class BuilderModule {}
