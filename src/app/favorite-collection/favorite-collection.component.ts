import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-favorite-collection',
  templateUrl: './favorite-collection.component.html',
  styleUrls: ['./favorite-collection.component.css']
})
export class FavoriteCollectionComponent implements OnChanges {

  @Input() newFavorite = '';

  favoriteImages: any = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    let imageData = changes.newFavorite.currentValue;
    let existingImage = this.favoriteImages.filter((obj: any) => {
      return obj.previewSrc === imageData.previewSrc;
    });
    
    if (existingImage.length === 0) {
      this.favoriteImages.push(imageData);
    }
  }

  removeFromFavorites(srcToRemove: any) {
    console.log(srcToRemove);
    this.favoriteImages = this.favoriteImages.filter((obj: any) => {
      return obj.previewSrc !== srcToRemove;
    });
  }

}
