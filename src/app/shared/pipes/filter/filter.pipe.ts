import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from '../../models/store.types';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {
  transform(items: Invoice[] | null, statusFilters: { [key: string]: boolean }): Invoice[] | null {
    
    if (!items || !statusFilters) {
      console.log(statusFilters, items);
      return items;
    }
    const activeFilters = Object.keys(statusFilters).filter(key => statusFilters[key]);

    if (activeFilters.length === 0) {
      console.log(statusFilters, items);
      return items;
    }
    let res= items.filter(item => activeFilters.includes(item.status));
    console.log(statusFilters, res);
    return res;
  }

}

// transform(items: Invoice[] | null, status:string[] ) {
//   if (items!.length <1 || status.length<1) {
//     console.log(items);
//     return items;
//   }
//     let res= items?.filter(item => status.includes(item.status));
//     console.log(res);
//     return res;
//   }