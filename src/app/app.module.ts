import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { JobsListComponent } from './search-page/jobs-list/jobs-list.component';
import { JobCardComponent } from './search-page/jobs-list/job-card/job-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    JobsListComponent,
    JobCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
