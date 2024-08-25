import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
  standalone: true
})
export class CustomDatePipe implements PipeTransform {
  private datePipe = new DatePipe('en-US');
  // constructor(private datePipe: DatePipe) {}

  transform(value: Date | string | number): string | null {
    if (!value) return null;
    return this.datePipe.transform(value, 'd MMM yyyy');
  }
}