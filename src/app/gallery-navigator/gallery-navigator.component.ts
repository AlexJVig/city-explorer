import { Component, Output, EventEmitter } from '@angular/core';

const numberOfResults = 5;

@Component({
  selector: 'app-gallery-navigator',
  templateUrl: './gallery-navigator.component.html',
  styleUrls: ['./gallery-navigator.component.css']
})
export class GalleryNavigatorComponent {

  @Output() navigationEvent = new EventEmitter<string>();

  numberArray = Array(numberOfResults).fill(0).map((x, i) => i);

  constructor() { }

  navigateTo(arg: string) {
    this.navigationEvent.emit(arg);
  }

}
