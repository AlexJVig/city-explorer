import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ResourceService } from '../resource.service';

@Component({
  selector: 'app-my-autocomplete',
  templateUrl: './my-autocomplete.component.html',
  styleUrls: ['./my-autocomplete.component.css']
})
export class MyAutocompleteComponent implements OnInit {

  @Output() searchLaunchEvent = new EventEmitter<string>();

  cityList = { cities: [] };

  showDropDown = false;

  searchValue = '';

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    this.resourceService.getCities()
      .subscribe((data: any) => this.cityList.cities = data.cities);
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }

  openDropDown() {
    this.showDropDown = true;
  }

  getSearchValue() {
    return this.searchValue;
  }

  selectValue(cityName: any) {
    this.searchValue = cityName;
    this.searchLaunchEvent.emit(this.searchValue);
    this.showDropDown = false;
  }

}
