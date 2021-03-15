import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search-page/search';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs(searchQuery: Search) {
    return this.http.get<Array<any>>(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchQuery.search}&full_time=${searchQuery.fullTime}&location=${searchQuery.location}`).toPromise();
  }
}
