import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Book } from './book';
import MOCK_BOOKS from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = MOCK_BOOKS;

  getBooks(title: string): Observable<Book[]> {
    return Observable.of(this.filterBooks(title));
  }

  getBookTitles(title: string): Observable<string[]> {
    return Observable.of(this.filterBooks(title).map(book => book.title));
  }

  filterBooks(title: string): Book[] {
    return title ?
      this.booksList.filter((book) => new RegExp(title, 'gi').test(book.title)) :
      [];
  }
}

/*
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Book } from './book';
import MOCK_BOOKS from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = MOCK_BOOKS;

  getBooks(title: string): Observable<Book[]> {
    return Observable.of(this.filterBooks(title));
  }

  getBookTitles(title: string): Observable<string[]> {
    return Observable.of(this.filterBooks(title).map(book => book.title));
  }

  filterBooks(title: string): Book[] {
    return title ?
      this.booksList.filter((book) => new RegExp(title, 'gi').test(book.title)) :
      [];
  }
}
*/

/*
import { Injectable } from '@angular/core';

import { Book } from './book';
import { BOOKS } from './mock-books';

@Injectable()
export class BookStoreService {

  booksList: Book[] = BOOKS;

  getBooks() {
    return this.booksList;
  }

  getBook(isbn: number) {
    return this.booksList.find(book => book.isbn === isbn);
  }

  deleteBook(isbn: number) {
    this.booksList = this.booksList.filter(book => book.isbn !== isbn);
    return this.booksList;
  }
}
*/