import { Component } from '@angular/core';
import { BookStoreService, Book } from './books/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  providers: [BookStoreService]
})
export class AppComponent {

    filteredBooks: Book[];

    constructor(private bookStoreService: BookStoreService) {
    }

    searchBook(title: string) {
      this.bookStoreService
        .getBooks(title)
        .subscribe(books => this.filteredBooks = books);
    }
  }
