import { ChangeDetectionStrategy, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilderEditorBoardComponent } from './form-builder-editor-board/form-builder-editor-board.component';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  @ViewChild('boardComponent', { static: false }) boardComponent: TemplateRef<FormBuilderEditorBoardComponent>;

  public el: any;
  public draggedItem: any;

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.el = this.boardComponent['cdr'].rootNodes[0].querySelector('#gridster1');
  }

  public onItemDraggedPlacedEventEmit(item: any): void {
    this.draggedItem = item;
    this.cdr.detectChanges();
  }
}
