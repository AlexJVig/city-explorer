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

  currentIndex = 0;

  constructor() { }

  navigateTo(arg: number) {
    this.navigationEvent.emit(arg);
    this.currentIndex = arg;
  }

  navigateLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.navigateTo(this.currentIndex);
    }
  }

  navigateRight() {
    if (this.currentIndex < numberOfResults - 1) {
      this.currentIndex += 1;
      this.navigateTo(this.currentIndex);
    }
  }

}
