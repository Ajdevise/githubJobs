import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from 'src/app/jobs.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  daysAgo: number;
  currentDate: Date = new Date();
  @Input() job;
  @Input() jobIndex;

  constructor(private jobsService: JobsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let cardDate = new Date(this.job.created_at);
    this.daysAgo = this.jobsService.elapsedDays(this.currentDate, cardDate);
  }

  navigateToDetailsPage() {
    this.jobsService.clickedJobId = this.jobIndex;
    this.router.navigate([this.job.id], {relativeTo: this.activatedRoute});
  }

}
