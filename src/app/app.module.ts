import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { MyAutocompleteComponent } from './my-autocomplete/my-autocomplete.component';
import { AutocompleteDirective } from './autocomplete.directive';
import { SearchFilterPipe } from './filter-pipe';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryNavigatorComponent } from './gallery-navigator/gallery-navigator.component';
import { FavoriteCollectionComponent } from './favorite-collection/favorite-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAutocompleteComponent,
    AutocompleteDirective,
    SearchFilterPipe,
    GalleryComponent,
    GalleryNavigatorComponent,
    FavoriteCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
