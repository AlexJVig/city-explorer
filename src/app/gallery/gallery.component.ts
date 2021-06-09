import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { createClient } from 'pexels';
import { Favorite } from '../favorite-collection/favorites.model';

const client = createClient('563492ad6f9170000100000122bbd5b61dd3428b85b45b0b0053b30a');

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  @Input() galleryInput = '';

  @Output() addToFavoritesEvent = new EventEmitter<Favorite>();

  photoResource: any = {};

  currentImagePath = '';

  currentCity = '';
  
  currentImagePreview = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let query = changes.galleryInput.currentValue;

    if (query !== '') {
      client.photos.search({ query, orientation: 'landscape', per_page: 5 }).then(photos => {
        this.photoResource = photos;
        console.log(this.photoResource);
        this.switchPhoto(0);
        this.currentCity = query;
      });
    }
  }

  switchPhoto(photoIndex: number) {
    this.currentImagePath = this.photoResource.photos[photoIndex].src.medium;
    this.currentImagePreview = this.photoResource.photos[photoIndex].src.tiny;
  }

  addToFavorites() {
    let args: Favorite = {
      city: this.currentCity,
      previewSrc: this.currentImagePreview
    };
    
    this.addToFavoritesEvent.emit(args);
  }

}
