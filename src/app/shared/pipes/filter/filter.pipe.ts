import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], statusFilters: { [key: string]: boolean }): any[] {
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
