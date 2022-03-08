import { Pipe, PipeTransform } from '@angular/core';
import * as helper from './timeframes';

@Pipe({
  name: 'filterDisabled'
})
export class FilterDisabledPipe implements PipeTransform {

  transform(items: any[], availabilities: any, formValue: any): any {

    return items.filter(item => {
      let spaceAvailabilities = availabilities.find(i => i.spaceId === item.id)?.availabilities;
      let timeframes = helper.timeframes(spaceAvailabilities,formValue)
      return timeframes.some(i => !i.disabled)
    });
  }
}
