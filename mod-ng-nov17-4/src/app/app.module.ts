/* /index is not required, we are mentioning this only because of SystemJS configuration */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent, BookSearchComponent } from './books/index';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    BooksListComponent,
    BookSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
