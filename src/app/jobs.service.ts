import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Search } from './search-page/search';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  currentQuery: Search;

  constructor(private http: HttpClient) { }

  getJobs(searchQuery: Search) {
    return this.http.get<Array<any>>(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchQuery.search}&full_time=${searchQuery.fullTime}&location=${searchQuery.location}`).toPromise();
  }

  getJob(id: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`);
  }

  elapsedDays(date1: Date, date2: Date) {
    let daysAgo: number;
    daysAgo = Math.abs(date1.getTime() - date2.getTime());
    daysAgo = Math.ceil(daysAgo / (1000 * 3600 * 24));
    
    return daysAgo;
  }
}
