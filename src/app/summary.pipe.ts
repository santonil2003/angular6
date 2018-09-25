import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number): any {

    if (!value) {
      return null;
    }

    if (!limit) {
      limit = 1;
    }

    return value.substring(0, limit) + '...';
  }

}
