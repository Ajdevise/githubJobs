import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { Search } from '../search';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit, OnChanges {
  loading = false;
  listOfJobs = [];
  @Input() searchParameters: Search;

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
  
  }

  async ngOnChanges() {
    if(!this.searchParameters) return;
    this.loading = true;
    this.listOfJobs = await this.jobsService.getJobs(this.searchParameters);
    this.loading = false;
  }

}
