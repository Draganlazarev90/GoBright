import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { SearchService } from './search.service';
import { ISpace } from './space/space.interface';
import * as moment from 'moment';
import { IAvailability } from './space/availability.interface';
import { durationOptions } from '../options';
import { FilterDisabledPipe } from './filter-disabled.pipe';
import * as helper from './timeframes';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  spaces: ISpace[] = [];
  availabilities: IAvailability[] = [];
  totalCount: number;
  formValue;
  durationLabel;
  constructor(private search: SearchService) { }

  onSearch(formVal) {
    console.log(formVal)
    this.formValue = formVal;
    this.durationLabel = durationOptions.find(i => i.value === formVal.duration).label;
    this.search.getResults(formVal).pipe(
      switchMap((response: any)=> {
        this.spaces = response.data;
        return this.search.getRoomAvailability(moment(formVal.date).format('YYYYMMDD'))
      })
    ).subscribe(
      (response: any) => {
        this.availabilities = response.data
        this.totalCount = new FilterDisabledPipe().transform(this.spaces,this.availabilities,this.formValue).length
      },
      (err=> {
        this.availabilities = [];
        this.totalCount = 0;
      })
    )
  }
  assignTimeframes(id) {
    let spaceAvailabilities = this.availabilities.find(i => i.spaceId === id)?.availabilities;
    return helper.timeframes(spaceAvailabilities,this.formValue);
  }

  get partOfDay(){

    const currentHour = moment(this.formValue.time).hour();

    if (currentHour >= 3 && currentHour < 12){
        return "morning";
    } else if (currentHour >= 12 && currentHour < 15){
        return "afternoon";
    }   else if (currentHour >= 15 && currentHour < 20){
        return "evening";
    } else if (currentHour >= 20 && currentHour < 3){
        return "night";
    }

  }
}
