import { NgModule } from '@angular/core';
import { SearchControlComponent } from './search-control.component';
import { SearchControlService } from './search-control.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipeModule } from '../../core/pipes/safe-html-pipe/safe-html-pipe.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SafeHtmlPipeModule],
  declarations: [SearchControlComponent],
  exports: [SearchControlComponent],
  providers: [SearchControlService],
})
export class SearchControlModule {

}
