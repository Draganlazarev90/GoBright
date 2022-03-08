import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getResults(form) {
    return this.http.get('https://gb-mgt-install-webapp-test.azurewebsites.net/personal_programmer/search_assignment/spaces.json')
  }
  getRoomAvailability(date) {
    return this.http.get(`https://gb-mgt-install-webapp-test.azurewebsites.net/personal_programmer/search_assignment/availabilities_${date}.json`)
  }

}
