import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IconsRepository } from '../../core/helpers/icons-repository';
import { getArrayItemByKeyValue } from '../../core/helpers/common-helper-functions';

@Component({
  selector: 'fb-search-control',
  templateUrl: './search-control.component.html',
  styleUrls: ['./search-control.component.scss'],
})
export class SearchControlComponent {
  @Input() placeholder: string;

  @Output() notifyFilter: EventEmitter<string> = new EventEmitter<string>();

  public filterInput = new FormControl();
  public searchIcon = getArrayItemByKeyValue(IconsRepository.iconsSvgData, 'id', IconsRepository.IconsEnum.Search).data;

  constructor() {
  }

  ngOnInit() {
    this.filterInput
      .valueChanges
      .pipe(
        debounceTime(200),
      )
      .subscribe((term) => {
        this.notifyFilter.emit(term);
      });
  }
}
