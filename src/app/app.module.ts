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

@NgModule({
  declarations: [
    AppComponent,
    MyAutocompleteComponent,
    AutocompleteDirective,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
