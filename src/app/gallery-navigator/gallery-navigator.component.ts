import { Component, Output, EventEmitter } from '@angular/core';

const numberOfResults = 5;

@Component({
  selector: 'app-gallery-navigator',
  templateUrl: './gallery-navigator.component.html',
  styleUrls: ['./gallery-navigator.component.css']
})
export class GalleryNavigatorComponent {

  @Output() navigationEvent = new EventEmitter<number>();

  numberArray = Array(numberOfResults).fill(0).map((x, i) => i);

  constructor() { }

  navigateTo(arg: any) {
    this.navigationEvent.emit(arg);
  }

}
