import { Injectable } from '@angular/core';

@Injectable()
export class SearchControlService {
  filterText: string;

  onNotifyFilter(message: string): void {
    this.filterText = message;
  }
}
