import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'City Explorer';

  searchQuery = '';

  newFavorite = '';

  updateQuery(newQuery: string) {
    this.searchQuery = newQuery;
  }

  receiveFavoriteImage(favoriteImage: any) {
    this.newFavorite = favoriteImage;
  }

}
