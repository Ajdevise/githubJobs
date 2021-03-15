import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Search } from './search';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchQuery: Search;
  searchForm: FormGroup;
  filterForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl("")
    })
    this.filterForm = new FormGroup({
      fullTime: new FormControl(false),
      locationInput: new FormControl(""),
      place: new FormControl("")
    })
  }

  submitForm() {
    let obj: Search  = {
      search: "",
      fullTime: false,
      location: "something"
    };

    obj["search"] = this.stringToQueryString(this.searchForm.value.search);
    obj["fullTime"] = this.filterForm.value.fullTime;
    obj["location"] = this.nonEmptyString(this.filterForm.value.place, this.filterForm.value.locationInput);

    this.searchQuery = obj;
    this.clearForms();
  }

  clearForms() {
    this.searchForm.reset();
    this.filterForm.reset();
  }

  deselectLocationRadios() {
    this.filterForm.patchValue({place: ""});
  }

  clearFilterLocationInput() {
    this.filterForm.patchValue({locationInput: ""});
  }

  private nonEmptyString(string1: string, string2: string) {
    if(string1 === "") return this.stringToQueryString(string2);
    else return this.stringToQueryString(string1);
  }

  private stringToQueryString(str: string) {
    if(!str) return "";
    return str.split(" ").join("+");
  }
}
