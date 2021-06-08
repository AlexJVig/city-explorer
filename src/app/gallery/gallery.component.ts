import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { createClient } from 'pexels';

const client = createClient('563492ad6f9170000100000122bbd5b61dd3428b85b45b0b0053b30a');

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() galleryInput = '';

  photoResource: any = {};

  currentImagePath = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let query = changes.galleryInput.currentValue;

    if (query !== '') {
      client.photos.search({ query, per_page: 1 }).then(photos => {
        this.photoResource = photos;
        console.log(this.photoResource);
        this.switchPhoto(0);
      });
    }
  }

  switchPhoto(photoIndex: number) {
    photoIndex = photoIndex;
    this.currentImagePath = this.photoResource.photos[photoIndex].src.large;
  }

}
