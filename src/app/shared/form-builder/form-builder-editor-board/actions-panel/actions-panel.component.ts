import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GridsterItemExtended } from '../../form-builder.model';

@Component({
  selector: 'fb-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsPanelComponent {
  @Input() item: GridsterItemExtended;
  @Output() itemRemoveClickEventEmitter: EventEmitter<GridsterItemExtended> = new EventEmitter<GridsterItemExtended>();
  @Output() itemEditClickEventEmitter: EventEmitter<GridsterItemExtended> = new EventEmitter<GridsterItemExtended>();

  public onEditClick(): void {
    this.itemEditClickEventEmitter.emit(this.item);
  }

  public onRemoveClick(): void {
    this.itemRemoveClickEventEmitter.emit(this.item);
  }
}
