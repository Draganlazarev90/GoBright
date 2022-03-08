import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as options from '../options';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  sub = new Subscription();
  loading
  filterForm: FormGroup;
  @Output() search = new EventEmitter();
  durationOptions = options.durationOptions;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.sub.add(this.filterForm.get('date').valueChanges.subscribe(
      data => {
        let hrs = this.filterForm.get('time').value.getHours();
        let mins = this.filterForm.get('time').value.getMinutes();
        let newDate = moment(data).add(hrs, 'hours').add(mins,'minutes').format('DD MMMM, YYYY, HH:mm');
        this.filterForm.get('time').setValue(new Date(newDate))
      }
    ))
  }

  createForm() {
    let date = new Date()
    date.setHours(8)
    date.setMinutes(0)
    this.filterForm = this.formBuilder.group({
      'date': [date, [Validators.required]],
      'time': [date, [Validators.required]],
      'duration': [15, [Validators.required]]
    });
  }
  onSubmit() {
    if(this.filterForm.valid) {
      this.loading = true;
      this.search.emit(this.filterForm.value);
    }
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
