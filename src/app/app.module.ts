import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { JobsListComponent } from './search-page/jobs-list/jobs-list.component';
import { JobCardComponent } from './search-page/jobs-list/job-card/job-card.component';
import { LoadingComponent } from './loading/loading.component';
import { RouterModule, Routes } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  {path: ':id', component: JobDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    JobsListComponent,
    JobCardComponent,
    LoadingComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, 
      {anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
