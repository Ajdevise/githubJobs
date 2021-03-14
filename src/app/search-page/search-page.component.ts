import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchForm: FormGroup;
  filterForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl("")
    })
    this.filterForm = new FormGroup({
      fullTime: new FormControl(),
      locationInput: new FormControl(),
      place: new FormControl()
    })
  }

  submitForm() {
    console.log(this.filterForm.value);
  }

  clearTheForm() {
    this.searchForm.reset();
  }

  deselectLocationRadios() {
    this.filterForm.patchValue({place: ""});
  }
}
