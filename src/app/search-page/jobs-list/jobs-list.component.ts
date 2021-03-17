import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { JobsService } from '../../jobs.service';
import { Search } from '../search';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.scss']
})
export class JobsListComponent implements OnInit, OnChanges, AfterViewInit {
  loading = false;
  listOfJobs = [];
  isLastPage = false;
  private currentPage: number = 1;
  @Input() searchParameters: Search;

  constructor(private jobsService: JobsService, private viewportScroller: ViewportScroller) { }

  async ngOnInit() {
    if(!this.jobsService.currentQuery) return;
    this.loading = true;
    this.searchParameters = this.jobsService.currentQuery;
    this.listOfJobs = this.jobsService.jobs;
    this.currentPage = this.jobsService.page;
    this.isLastPage = this.jobsService.lastPage;
    this.loading = false;
    if(this.listOfJobs.length < 50) this.isLastPage = true;
  }

  async ngOnChanges() {
    if(!this.searchParameters) return;
    this.currentPage = 1;
    this.loading = true;
    this.listOfJobs = await this.jobsService.getJobs(this.searchParameters, this.currentPage);
    this.jobsService.jobs = this.listOfJobs;
    this.loading = false;
    this.jobsService.currentQuery = this.searchParameters;
    if(this.listOfJobs.length < 50) this.isLastPage = true;
    else this.isLastPage = false;
  }

  ngAfterViewInit() {
    if(!this.jobsService.clickedJobId) return;
    this.viewportScroller.scrollToAnchor(this.jobsService.clickedJobId.toString());
  }

  async loadMoreJobs() {
    this.loading = true;
    this.currentPage += 1;
    let jobs = await this.jobsService.getJobs(this.searchParameters, this.currentPage);
    this.loading = false;
    this.jobsService.jobs = this.listOfJobs;
    if(jobs.length < 50) this.isLastPage = true;
    this.jobsService.page = this.currentPage;
    this.jobsService.lastPage = this.isLastPage;
    this.listOfJobs.push(...jobs);
  }
}
