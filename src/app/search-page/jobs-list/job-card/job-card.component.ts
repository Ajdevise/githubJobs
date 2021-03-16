import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private jobsService: JobsService) { }

  ngOnInit() {
    let cardDate = new Date(this.job.created_at);
    this.daysAgo = this.jobsService.elapsedDays(this.currentDate, cardDate);
  }

}
