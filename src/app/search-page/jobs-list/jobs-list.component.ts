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

  ngOnInit() {
    if(this.isServiceInitialized()) {
      this.initializeFields();
    }
  }

  ngOnChanges() {
    if(this.searchParameters) {
      this.currentPage = 1;
      this.getJobs(true); // Da li treba da stoji await ovde s obzirom da je poslednja linija i da ne mora da vraca nista
    }
  }

  ngAfterViewInit() {
    if(this.isServiceInitialized()) {
      this.viewportScroller.scrollToAnchor(this.jobsService.clickedJobId.toString());
    }
  }

  loadMoreJobs() {
    this.currentPage += 1;
    this.getJobs(); // I ovde isto
  }

  private storeValuesInService() {
    this.jobsService.currentQuery = this.searchParameters;
    this.jobsService.jobs = this.listOfJobs.slice();
    this.jobsService.page = this.currentPage;
    this.jobsService.lastPage = this.isLastPage;
  }

  private initializeFields() {
    this.searchParameters = this.jobsService.currentQuery;
    this.listOfJobs = this.jobsService.jobs.slice();
    this.currentPage = this.jobsService.page;
    this.isLastPage = this.jobsService.lastPage;
  }

  private isServiceInitialized(): boolean {
    return this.jobsService.currentQuery != undefined;
  }

  private checkIsLastPage(jobs: Array<any> = this.listOfJobs) {
    if(jobs.length < 50) this.isLastPage = true;
    else this.isLastPage = false;
  }

  private async getJobs(firstTime: boolean = false) {
    if(firstTime) this.listOfJobs = [];
    this.loading = true;
    let jobs = await this.jobsService.getJobs(this.searchParameters, this.currentPage);
    this.loading = false;
    if(firstTime) {
      this.listOfJobs = jobs;
    } else {
      this.listOfJobs.push(...jobs);
    }
    
    this.checkIsLastPage(jobs);
    this.storeValuesInService();
  }
}
