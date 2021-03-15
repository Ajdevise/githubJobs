import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  daysAgo: number;
  currentDate: Date = new Date();
  @Input() job;

  constructor() { }

  ngOnInit() {
    let cardDate = new Date(this.job.created_at);
    this.daysAgo = Math.abs(this.currentDate.getTime() - cardDate.getTime());
    this.daysAgo = Math.ceil(this.daysAgo / (1000 * 3600 * 24));
  }

}
