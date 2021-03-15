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

const routes: Routes = [
  {path: '', component: SearchPageComponent},
  // {path: '/:id', component: DetailsPage}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    JobsListComponent,
    JobCardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
