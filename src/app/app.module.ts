import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ExampleComponent } from './example/example.component';
import { FiltersComponent } from './filters/filters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng-lts/calendar';
import { DropdownModule } from 'primeng-lts/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { SpaceComponent } from './search/space/space.component';
import { FilterDisabledPipe } from './search/filter-disabled.pipe';
@NgModule({
   declarations: [
      AppComponent,
      SearchComponent,
      ExampleComponent,
      FiltersComponent,
      SpaceComponent,
      FilterDisabledPipe,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      CalendarModule,
      HttpClientModule,
      DropdownModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
