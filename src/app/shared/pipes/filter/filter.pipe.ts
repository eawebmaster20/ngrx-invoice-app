import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from '../../models/store.types';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: Invoice[] | null, statusFilters: { [key: string]: boolean }): Invoice[] | null {
    if (!items || !statusFilters) {
      return items;
    }
    const activeFilters = Object.keys(statusFilters).filter(key => statusFilters[key]);

    if (activeFilters.length === 0) {
      return items;
    }
    return items.filter(item => activeFilters.includes(item.status));
  }

}
