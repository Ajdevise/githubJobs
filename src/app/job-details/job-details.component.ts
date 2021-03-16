import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JobDetailsComponent implements OnInit {
  job;
  daysElapsed: number;
  private id: string;
  constructor(private jobsService: JobsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.jobsService.getJob(this.id).subscribe(data => {
      this.job = data;
      this.daysElapsed = this.jobsService.elapsedDays(new Date(), new Date(this.job.created_at));
    })
  }

}
