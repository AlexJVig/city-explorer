import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-my-autocomplete',
  templateUrl: './my-autocomplete.component.html',
  styleUrls: ['./my-autocomplete.component.css']
})
export class MyAutocompleteComponent implements OnInit {

  cityList = { cities: [] };

  showDropDown = false;

  searchValue = "";

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resourceService.getCities()
      .subscribe((data: any) => this.cityList.cities = data.cities);
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  getSearchValue() {
    return this.searchValue;
  }

}
