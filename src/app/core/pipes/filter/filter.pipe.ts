import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any, filter: any, isAnd?: boolean): any {
    if (filter && Array.isArray(items)) {
      const filterKeys = Object.keys(filter);
      if (isAnd) {
        return items.filter((item) =>
          filterKeys.reduce((acc, keyName) =>
            // @ts-ignore
          (acc && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
      } else {
        return items.filter((item) => {
          return filterKeys.some((keyName) => {
            const filterKeyName = filter[keyName];
            return new RegExp(filterKeyName ? filterKeyName.replace(/\\/g, "\\\\") : filterKeyName, 'gi').test(item[keyName]) || filterKeyName === '';
          });
        });
      }
    } else {
      return items;
    }
  }
}
